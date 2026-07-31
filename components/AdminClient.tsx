'use client';

import { useEffect, useRef, useState } from 'react';
import type { TeamMember } from './TeamClient';

type AuthStatus = 'checking' | 'authed' | 'unauthed';
type FormStatus = 'idle' | 'sending' | 'success' | 'error';

function initials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('');
}

export default function AdminClient() {
  const [authStatus, setAuthStatus] = useState<AuthStatus>('checking');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);

  const [members, setMembers] = useState<TeamMember[]>([]);
  const [membersLoading, setMembersLoading] = useState(false);
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    fetch('/api/admin/check')
      .then((r) => r.json())
      .then((data) => setAuthStatus(data.authed ? 'authed' : 'unauthed'))
      .catch(() => setAuthStatus('unauthed'));
  }, []);

  useEffect(() => {
    if (authStatus === 'authed') {
      loadMembers();
    }
  }, [authStatus]);

  async function loadMembers() {
    setMembersLoading(true);
    try {
      const res = await fetch('/api/team');
      const data = await res.json();
      setMembers(data.members ?? []);
    } finally {
      setMembersLoading(false);
    }
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError(false);
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        setAuthStatus('authed');
      } else {
        setLoginError(true);
      }
    } catch {
      setLoginError(true);
    } finally {
      setLoginLoading(false);
    }
  }

  async function handleAddMember(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormStatus('sending');
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch('/api/team', { method: 'POST', body: formData });
      if (res.ok) {
        setFormStatus('success');
        formRef.current?.reset();
        loadMembers();
        setTimeout(() => setFormStatus('idle'), 2500);
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  }

  async function handleDelete(id: number) {
    if (!confirm('Bu ekip üyesini silmek istediğinize emin misiniz?')) return;
    const res = await fetch(`/api/team/${id}`, { method: 'DELETE' });
    if (res.ok) {
      setMembers((prev) => prev.filter((m) => m.id !== id));
    }
  }

  if (authStatus === 'checking') {
    return <div style={{ background: '#0a1628', minHeight: '100vh' }} />;
  }

  if (authStatus === 'unauthed') {
    return (
      <div style={{ background: '#0a1628', minHeight: '100vh', color: '#fff' }}>
        <div className="admin-login">
          <h1>Melz Admin</h1>
          <form className="contact-form" onSubmit={handleLogin}>
            <div className="form-group">
              <label>Şifre</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoFocus
              />
            </div>
            {loginError && (
              <p style={{ color: '#e57373', fontSize: 14 }}>Şifre hatalı, tekrar deneyin.</p>
            )}
            <button type="submit" className="submit-btn" disabled={loginLoading}>
              {loginLoading ? 'Giriş yapılıyor...' : 'Giriş Yap'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: '#0a1628', minHeight: '100vh', color: '#fff' }}>
      <div className="admin-wrap">
        <div className="admin-panel-header">
          <h1 style={{ fontFamily: 'var(--font)', fontSize: 28, fontWeight: 800 }}>Ekibimiz Yönetimi</h1>
          <button
            className="admin-logout-btn"
            onClick={async () => {
              await fetch('/api/admin/logout', { method: 'POST' });
              setAuthStatus('unauthed');
              setPassword('');
            }}
          >
            Çıkış Yap
          </button>
        </div>

        <h2 className="admin-section-title">Yeni Ekip Üyesi Ekle</h2>
        <form ref={formRef} className="contact-form" onSubmit={handleAddMember}>
          <div className="form-group">
            <label>İsim Soyisim</label>
            <input type="text" name="name" required placeholder="Örn. Ahmet Yılmaz" />
          </div>

          <div className="form-group">
            <label>Unvan</label>
            <input type="text" name="title" placeholder="Örn. Gümrük Müşaviri" />
          </div>

          <div className="form-group">
            <label>Deneyim</label>
            <textarea name="bio" placeholder="Kısa deneyim özeti..." />
          </div>

          <div className="form-group">
            <label>Fotoğraf</label>
            <input type="file" name="photo" accept="image/*" />
          </div>

          {formStatus === 'error' && (
            <p style={{ color: '#e57373', fontSize: 14 }}>Bir hata oluştu, lütfen tekrar deneyin.</p>
          )}
          {formStatus === 'success' && (
            <p style={{ color: '#4caf50', fontSize: 14 }}>Ekip üyesi eklendi.</p>
          )}

          <button type="submit" className="submit-btn" disabled={formStatus === 'sending'}>
            {formStatus === 'sending' ? 'Ekleniyor...' : 'Ekip Üyesi Ekle'}
          </button>
        </form>

        <h2 className="admin-section-title">Mevcut Ekip Üyeleri</h2>
        {membersLoading ? (
          <p className="admin-empty">Yükleniyor...</p>
        ) : members.length === 0 ? (
          <p className="admin-empty">Henüz ekip üyesi eklenmedi.</p>
        ) : (
          <div className="admin-member-list">
            {members.map((m) => (
              <div key={m.id} className="admin-member-row">
                {m.photo_url ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={m.photo_url} alt={m.name} className="admin-member-photo" />
                ) : (
                  <div className="admin-member-photo-placeholder">{initials(m.name)}</div>
                )}
                <div className="admin-member-info">
                  <strong>{m.name}</strong>
                  <span>{m.title_tr}</span>
                </div>
                <button className="admin-delete-btn" onClick={() => handleDelete(m.id)}>
                  Sil
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
