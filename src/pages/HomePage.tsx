import { Link } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import './HomePage.css'

const features = [
  {
    icon: '⚡',
    title: 'Hiệu suất vượt trội',
    desc: 'Xử lý hàng triệu tokens mỗi giây với latency gần bằng 0 nhờ hạ tầng Solana blockchain.',
  },
  {
    icon: '🤖',
    title: 'Đa dạng Models AI',
    desc: 'Truy cập hàng chục AI models tiên tiến nhất: GPT-4, Claude 3, Gemini Ultra và nhiều hơn nữa.',
  },
  {
    icon: '🔒',
    title: 'Bảo mật tuyệt đối',
    desc: 'Dữ liệu được mã hóa end-to-end, không lưu trữ prompt, đảm bảo quyền riêng tư hoàn toàn.',
  },
  {
    icon: '💎',
    title: 'Chi phí tối ưu',
    desc: 'Giá cả minh bạch, pay-per-use, tiết kiệm đến 70% so với gọi trực tiếp các API nhà cung cấp.',
  },
]

const models = [
  { name: 'GPT-4o', badge: 'OpenAI', color: '#10a37f' },
  { name: 'Claude 3.5', badge: 'Anthropic', color: '#d97757' },
  { name: 'Gemini Ultra', badge: 'Google', color: '#4285f4' },
  { name: 'Llama 3.1', badge: 'Meta', color: '#0668e1' },
  { name: 'Mistral Large', badge: 'Mistral', color: '#ff7000' },
  { name: 'Grok-2', badge: 'xAI', color: '#a78bfa' },
]

export default function HomePage() {
  return (
    <div className="home-page">
      <Navbar />

      {/* Hero */}
      <section className="hero">
        {/* Background elements */}
        <div className="hero-bg">
          <div className="hero-orb hero-orb-1" />
          <div className="hero-orb hero-orb-2" />
          <div className="hero-grid" />
        </div>

        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot" />
            <span>Models mới: GPT-4o & Gemini Ultra đã có sẵn</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </div>

          <h1 className="hero-title">
            <span className="hero-title-main">SolanAI</span>
            <br />
            <span className="hero-title-sub">Nền tảng AI</span>
            <br />
            <span className="hero-title-accent">thế hệ mới</span>
          </h1>

          <p className="hero-desc">
            Nơi tập trung những model AI mới nhất,{' '}
            <span className="text-gradient">giá tốt nhất</span> thị trường.
            <br />
            Tích hợp dễ dàng · Hiệu suất cao · Bảo mật tuyệt đối
          </p>

          <div className="hero-cta">
            <Link to="/register" className="cta-primary" id="hero-cta-register">
              <span>Bắt đầu miễn phí</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <Link to="/login" className="cta-secondary" id="hero-cta-login">
              Đăng nhập
            </Link>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-value">50+</span>
              <span className="stat-label">AI Models</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-value">99.9%</span>
              <span className="stat-label">Uptime</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-value">10K+</span>
              <span className="stat-label">Developers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Models */}
      <section className="models-section">
        <div className="section-inner">
          <p className="section-eyebrow">Được tích hợp sẵn</p>
          <h2 className="section-title">Các AI Models hàng đầu</h2>
          <div className="models-grid">
            {models.map((m) => (
              <div className="model-card" key={m.name}>
                <div className="model-dot" style={{ background: m.color }} />
                <div>
                  <div className="model-name">{m.name}</div>
                  <div className="model-badge">{m.badge}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <div className="section-inner">
          <p className="section-eyebrow">Tại sao chọn chúng tôi</p>
          <h2 className="section-title">Mọi thứ bạn cần trong một nền tảng</h2>
          <div className="features-grid">
            {features.map((f) => (
              <div className="feature-card" key={f.title}>
                <div className="feature-icon">{f.icon}</div>
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner-section">
        <div className="cta-banner">
          <div className="cta-banner-bg" />
          <h2 className="cta-banner-title">Sẵn sàng bắt đầu?</h2>
          <p className="cta-banner-desc">Tạo tài khoản miễn phí và trải nghiệm ngay hôm nay.</p>
          <Link to="/register" className="cta-primary" id="cta-footer-register">
            <span>Đăng ký ngay — Miễn phí</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <span className="footer-logo">SolanAI</span>
          <span className="footer-copy">© 2025 SolanAI. All rights reserved.</span>
        </div>
      </footer>
    </div>
  )
}
