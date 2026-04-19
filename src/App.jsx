import React, { useEffect, useRef, useState } from 'react';
import './index.css';
import mindbowserText from './assets/mindbowser-text.png';
import mindbowserMark from './assets/mindbowser-mark.png';

export default function App() {
  const containerRef = useRef(null);
  const [currentView, setCurrentView] = useState('dashboard');
  useEffect(() => {
    if (!containerRef.current) return;
    // Injecting the raw JS from the original script
    
    const uiSimulations = {
      'secureCoding': {
        title: 'Secure Coding Standards',
        html: `
          <div class="sim-badge" style="margin-bottom:15px; display:inline-block; background:#f4c430; padding:4px 10px; border-radius:4px; font-size:12px; font-weight:800; text-transform:uppercase;">Standards Context</div>
          <div style="background:#f8fafc; border:1px solid #cbd5e1; border-radius:12px; padding:20px;">
            <p style="margin-bottom:15px; font-size:14px; line-height:1.6; color:#334155;">Always use audited, industry-standard libraries instead of deprecated alternatives.</p>
            
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:15px; margin-bottom: 20px;">
              <!-- Secure -->
              <div style="border:1px solid #10b981; border-radius:8px; padding:15px; background:#f0fdf4;">
                <div style="font-weight:700; color:#047857; margin-bottom:8px; display:flex; align-items:center; gap:6px;">
                  <span>✅</span> Secure Official Framework
                </div>
                <div style="font-size:12px; margin-bottom:15px; color:#065f46; line-height:1.5; min-height:45px;">
                  <strong>lexical</strong> is an audited, highly extensible text editor created by Meta that prioritizes DOM sanitization.
                </div>
                <a href="https://www.npmjs.com/package/lexical" target="_blank" style="display:inline-block; padding:8px 12px; background:#10b981; color:#fff; text-decoration:none; border-radius:6px; font-weight:600; font-size:13px; text-align:center; width:100%;">View lexical on npm</a>
              </div>
              
              <!-- Insecure -->
              <div style="border:1px solid #ef4444; border-radius:8px; padding:15px; background:#fef2f2;">
                <div style="font-weight:700; color:#b91c1c; margin-bottom:8px; display:flex; align-items:center; gap:6px;">
                  <span>❌</span> Unmaintained Editor
                </div>
                <div style="font-size:12px; margin-bottom:15px; color:#991b1b; line-height:1.5; min-height:45px;">
                  Unmaintained libraries like <strong>pell</strong> (abandoned 7 years ago) often lack DOM sanitization, exposing apps to Cross-Site Scripting (XSS).
                </div>
                <a href="https://www.npmjs.com/package/pell" target="_blank" style="display:inline-block; padding:8px 12px; background:#ef4444; color:#fff; text-decoration:none; border-radius:6px; font-weight:600; font-size:13px; text-align:center; width:100%;">View pell on npm</a>
              </div>
            </div>

          </div>`
      },
      'pre': {
        title: 'Prerequisites: Security Readiness',
        html: `
          <div class="sim-badge">Audit: Onboarding</div>
          <div style="background:#f8fafc; border:1px solid #cbd5e1; border-radius:12px; padding:20px;">
             <div style="border-bottom:1px solid #e2e8f0; padding-bottom:15px; margin-bottom:15px;">
                <div style="font-weight:700; color:#0f172a;">✓ System Configuration</div>
             </div>
             <div style="display:flex; flex-direction:column; gap:12px;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <span style="font-size:13px;">Full Disk Encryption (FileVault/BitLocker)</span>
                  <span style="font-weight:800; color:#10b981;">ENABLED</span>
                </div>
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <span style="font-size:13px;">1Password / SSO Provisioning</span>
                  <span style="font-weight:800; color:#10b981;">SYNCED</span>
                </div>
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <span style="font-size:13px;">Security Awareness Module</span>
                  <span style="font-weight:800; color:#10b981;">PASSED</span>
                </div>
             </div>
          </div>`
      },
      'sso': {
        title: 'Identity: Google SSO Login',
        html: `
          <div class="sim-badge">Real-Time Screen</div>
          <div style="text-align:center;">
             <img src="./google_sso_screenshot_1775715009635.png" class="sim-screenshot" style="max-height:280px; width:auto;" onclick="alert('Corporate Account Selected')">
             <div style="margin-top:12px; font-size:12px; color:#64748b; text-align:left; padding:10px; background:#f8fafc; border-radius:6px; border:1px solid #e2e8f0;">
                <strong>Policy:</strong> Use @mindbowser.com identities for all external SaaS.
             </div>
          </div>`
      },
      'mfa': {
        title: 'Multi-Factor Auth (Okta Push)',
        html: `
          <div class="sim-badge">Real-Time Mobile Push</div>
          <div style="text-align:center;">
             <img src="./okta_mfa_push_screenshot_1775714965523.png" class="sim-screenshot" style="max-height:300px; width:auto;">
             <div style="margin-top:15px;">
                <button class="btn-primary" style="background:#1d4ed8; font-weight:700;" onclick="alert('Access Granted')">Approve Request</button>
             </div>
          </div>`
      },
      'vpn': {
        title: 'Secure Network Tunnel (VPN)',
        html: `
          <div style="background:#0f172a; color:#fff; border-radius:12px; padding:25px; box-shadow:0 10px 25px rgba(0,0,0,0.2);">
            <div style="display:flex; align-items:center; gap:12px; margin-bottom:15px;">
              <div style="width:12px; height:12px; background:#22c55e; border-radius:50%; box-shadow:0 0 10px #22c55e;"></div>
              <div style="font-weight:700; font-size:16px;">Mindbowser SecureGate</div>
            </div>
            <div style="font-family:monospace; font-size:13px; color:#94a3b8;">
              Status: CONNECTED<br>
              Server: aws-us-east-prod-01<br>
              Protocol: WireGuard / TLS 1.3
            </div>
          </div>`
      },
      'av': {
        title: 'Security Alert: Incident Triage',
        html: `
          <div class="sim-badge">Real-Time Slack Notification</div>
          <div style="text-align:center;">
             <img src="./slack_security_alert_screenshot_1775715088047.png" class="sim-screenshot">
             <div style="margin-top:10px; font-size:12px; color:#64748b; text-align:left; padding:12px; background:#fff2f2; border:1px solid #fee2e2; border-radius:8px;">
                <strong>Protocol:</strong> All secret/malware detections are auto-routed to the #security-alerts channel.
             </div>
          </div>`
      },
      'lock': {
        title: 'Physical Security: Workstation Lock',
        html: `
          <div style="background:#000; color:#fff; padding:40px; border-radius:12px; text-align:center; box-shadow:inset 0 0 50px rgba(255,255,255,0.1);">
             <div style="font-size:48px; margin-bottom:15px;">🔐</div>
             <div style="font-size:20px; font-weight:700; letter-spacing:1px;">SCREEN LOCKED</div>
             <div style="font-size:12px; color:#666; margin-top:20px;">Use TouchID or Password to resume</div>
          </div>`
      },
      'apps': {
        title: 'Approved Software Catalog',
        html: `
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:15px;">
             <div style="border:1px solid #22c55e; background:#f0fdf4; padding:15px; border-radius:8px; text-align:center;">
                <div style="font-weight:800; color:#166534; font-size:12px;">✅ APPROVED</div>
                <div style="font-size:24px; margin:5px 0;">🔵</div>
                <div style="font-size:11px; font-weight:700;">Slack / Jira / AWS</div>
             </div>
             <div style="border:1px dashed #ef4444; background:#fef2f2; padding:15px; border-radius:8px; text-align:center; opacity:0.7;">
                <div style="font-weight:800; color:#b91c1c; font-size:12px;">❌ PROHIBITED</div>
                <div style="font-size:24px; margin:5px 0;">🟢</div>
                <div style="font-size:11px; font-weight:700;">WhatsApp / Personal Dropbox</div>
             </div>
          </div>`
      },
      'phish': {
        title: 'Phishing Defense: URL Inspection',
        html: `
          <div style="background:#fff; border:1px solid #e2e8f0; border-radius:12px; padding:20px; box-shadow:0 4px 6px -1px rgba(0,0,0,0.05);">
            <div style="font-size:13px; margin-bottom:15px; background:#f1f5f9; padding:10px; border-radius:6px; font-family:monospace;">
              Sender: it-support@g00gle.ru <br>
              Subject: Urgent: Verify Account
            </div>
            <div style="background:#fffbeb; border:1px solid #fef3c7; border-left:4px solid #f59e0b; padding:15px; border-radius:6px;">
               <div style="font-weight:800; color:#92400e; font-size:14px; margin-bottom:5px;">⚠️ Domain Warning</div>
               The domain <strong>g00gle.ru</strong> is a known phishing variant of <strong>google.com</strong>.
            </div>
          </div>`
      },
      'report': {
        title: 'Emergency: Security Incident Report',
        html: `
          <div class="ui-widget" style="margin-top:0;">
            <div class="ui-header" style="background:#ef4444;">🚨 Incident Reporting Hotbox</div>
            <div class="ui-body">
              <label style="font-size:11px; font-weight:700; color:#64748b; display:block; margin-bottom:5px;">INCIDENT DESCRIPTION</label>
              <textarea style="width:100%; height:80px; border:1px solid #ddd; border-radius:6px; padding:10px; font-size:13px; margin-bottom:15px;" placeholder=" Accidentally pushed sensitive.env to public repo..."></textarea>
              <button class="btn-primary" style="width:100%; background:#ef4444; font-weight:800;" onclick="alert('Incident Reported to IT-SEC. Stay on standby.')">SUBMIT HIGH-PRIORITY REPORT</button>
            </div>
          </div>`
      },
      'secret': {
        title: 'IDE: Pre-Commit Secret Shield',
        html: `
          <div style="background:#1e1e1e; border-radius:12px; padding:25px; font-family:'Menlo', monospace; border:1px solid #333;">
            <div style="color:#d4d4d4; font-size:13px; line-height:1.6;">
              <span style="color:#569cd6;">const</span> <span style="color:#9cdcfe;">STRIPE_KEY</span> = <span style="background:rgba(239, 68, 68, 0.4); border-bottom:2px solid #ef4444; padding:0 4px;">"sk_live_51M..."</span>;
            </div>
            <div style="margin-top:20px; background:rgba(255,255,255,0.05); border-radius:8px; padding:12px; display:flex; gap:10px; align-items:center;">
               <div style="color:#ef4444; font-weight:800; font-size:16px;">✕</div>
               <div style="color:#fca5a5; font-size:11px;">Error: Hardcoded secret detected by "git-secrets".<br>Commit rejected. Move key to .env file.</div>
            </div>
          </div>`
      },
      'pr': {
        title: 'GitHub: Secure Code Review',
        html: `
          <div style="background:#fff; border:1px solid #d1d5da; border-radius:6px; overflow:hidden;">
            <div style="background:#f6f8fa; padding:12px; border-bottom:1px solid #d1d5da; display:flex; justify-content:space-between; align-items:center;">
               <div style="font-weight:700; font-size:14px; display:flex; align-items:center; gap:8px;">
                 <div style="width:24px; height:24px; background:#34d399; border-radius:50%;"></div>
                 reviewer-mindbowser
               </div>
               <span style="background:#dafbe1; color:#1a7f37; font-size:10px; font-weight:700; padding:2px 8px; border-radius:10px;">APPROVED</span>
            </div>
            <div style="padding:15px; font-size:13px;">
               "Input validation and CORS policy looks correct on this endpoint. Passing security checks."
            </div>
          </div>`
      },
      'ticket': {
        title: 'Jira: Search & Compliance Log',
        html: `
          <div class="ui-widget" style="margin-top:0;">
            <div class="ui-header" style="background:#0052cc;">🔍 Jira Dashboard</div>
            <div class="ui-body">
              <div style="display:flex; flex-direction:column; gap:8px;">
                 <div style="background:#fafbfc; border:1px solid #dfe1e6; padding:10px; border-radius:4px; font-size:12px; font-weight:700;">
                    PROD-445: Patch Database (Security) <span style="float:right; color:#10b981;">✓ DONE</span>
                 </div>
                 <div style="background:#fafbfc; border:1px solid #dfe1e6; padding:10px; border-radius:4px; font-size:12px; font-weight:700;">
                    OPS-992: Scale VPC Subnets <span style="float:right; color:#0052cc;">IN PREP</span>
                 </div>
              </div>
            </div>
          </div>`
      },
      'mask': {
        title: 'Kibana: Logs & Data Masking',
        html: `
          <div class="ui-widget" style="margin-top:0;">
            <div class="ui-header">📊 Elastic Stack / Kibana</div>
            <div class="ui-body" style="background:#0f172a; padding:20px;">
              <pre style="color:#a5b4fc; font-size:12px; margin:0; line-height:1.5;">
{
  "timestamp": "2026-04-09...",
  "event": "data_export",
  "user_email": <span style="color:#22c55e;">"r***@mindbowser.com"</span>,
  "pii_ssn": <span style="color:#22c55e;">"XXX-XX-1234"</span>
}</pre>
              <div style="margin-top:15px; font-size:10px; color:#64748b;">✓ PII Masking applied at ingest (Logstash)</div>
            </div>
          </div>`
      },
      'vuln': {
        title: 'Snyk: Vulnerability Snapshot',
        html: `
          <div class="ui-widget" style="margin-top:0;">
            <div class="ui-header" style="background:#4c1d95;">🛡️ Snyk Security Scan</div>
            <div class="ui-body" style="padding:20px;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px;">
                 <div style="text-align:center;"><div style="font-size:18px; font-weight:800; color:#ef4444;">0</div><div style="font-size:9px; color:#666;">CRIT</div></div>
                 <div style="text-align:center;"><div style="font-size:18px; font-weight:800; color:#f59e0b;">2</div><div style="font-size:9px; color:#666;">HIGH</div></div>
                 <div style="text-align:center;"><div style="font-size:18px; font-weight:800; color:#10b981;">140</div><div style="font-size:9px; color:#666;">LOW</div></div>
              </div>
              <div style="background:#f3f4f6; padding:8px; border-radius:4px; font-size:11px;">Status: <strong>Clean Build</strong> (2 vulnerabilities ignored via override)</div>
            </div>
          </div>`
      },
      'rbac': {
        title: 'AWS IAM: Role Configuration',
        html: `
          <div class="ui-widget" style="margin-top:0;">
            <div class="ui-header" style="background:#232f3e;">☁️ AWS Management Console</div>
            <div class="ui-body">
              <div style="font-size:13px; font-weight:700; margin-bottom:12px;">IAM Role: dev-data-access</div>
              <div style="background:#f8fafc; border:1px solid #ddd; padding:12px; border-radius:6px;">
                <div style="font-weight:800; color:#22c55e; font-size:11px; margin-bottom:5px;">✓ AmazonS3ReadOnlyAccess</div>
                <div style="font-weight:800; color:#ef4444; font-size:11px; opacity:0.6;">🔒 AdministratorAccess (Denied)</div>
              </div>
            </div>
          </div>`
      },
      'retention': {
        title: 'Data Lifecycle Policy',
        html: `
          <div class="ui-widget" style="margin-top:0;">
            <div class="ui-header">⚙️ Retention Settings</div>
            <div class="ui-body">
               <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #eee; padding-bottom:12px; margin-bottom:12px;">
                 <div><div style="font-weight:700; font-size:13px;">Delete Staging Logs</div><div style="font-size:11px; color:#64748b;">Standard Period</div></div>
                 <div style="width:36px; height:18px; background:#10b981; border-radius:20px; position:relative;"><div style="width:14px; height:14px; background:#fff; border-radius:50%; position:absolute; right:2px; top:2px;"></div></div>
               </div>
               <div style="display:flex; justify-content:space-between; align-items:center;">
                 <div><div style="font-weight:700; font-size:13px;">Scrub PII from Dev</div><div style="font-size:11px; color:#64748b;">On DB sync</div></div>
                 <div style="width:36px; height:18px; background:#10b981; border-radius:20px; position:relative;"><div style="width:14px; height:14px; background:#fff; border-radius:50%; position:absolute; right:2px; top:2px;"></div></div>
               </div>
            </div>
          </div>`
      },
      'a01': {
        title: 'GitHub: Continuous Compliance',
        html: `
          <div class="sim-badge">Real-Time CI Pipeline</div>
          <div style="text-align:center;">
             <img src="./github_pr_passed_checks_screenshot_1775714926949.png" class="sim-screenshot">
             <div style="margin-top:10px; font-size:12px; color:#64748b; text-align:left; background:#f6f8fa; padding:12px; border-radius:8px;">
                <strong>Requirement:</strong> Automated scans (Sonar/Snyk) must be GREEN before code merge.
             </div>
          </div>`
      },
      'a02': {
        title: 'Access Control: Login Guard',
        html: `
          <div class="sim-badge">Security Hub</div>
          <div style="text-align:center; padding: 20px;">
            <div style="background:#fff; border:1px solid #e2e8f0; border-radius:12px; padding:30px; box-shadow:0 4px 20px -5px rgba(0,0,0,0.1);">
              <img src="./google_sso_screenshot_1775715009635.png" style="width:64px; margin-bottom:25px;">
              <div style="font-weight:800; font-size:18px; color:#0f172a; margin-bottom:10px;">Security Verification</div>
              <div style="font-size:14px; color:#64748b; margin-bottom:30px;">Accessing Production Environment...</div>
              <div style="border:2px solid var(--teal); border-radius:10px; padding:15px; text-align:left; display:flex; align-items:center; gap:12px;">
                <div style="width:12px; height:12px; background:var(--teal); border-radius:50%; animation: pulse 1.5s infinite;"></div>
                <div style="font-weight:700; font-size:14px; color:var(--teal);">AWAITING PUSH APPROVAL</div>
              </div>
            </div>
          </div>
          <style>@keyframes pulse { 0% { opacity:1; } 50% { opacity:0.4; } 100% { opacity:1; } }</style>`
      },
      'a03': {
        title: 'Jira: Production Change Request',
        html: `
          <div class="sim-badge">Real-Time Ticket</div>
          <div style="text-align:center;">
             <img src="./jira_ticket_screenshot_1775714857318.png" class="sim-screenshot">
             <div style="margin-top:12px; font-size:12px; color:#64748b; text-align:left; padding:12px; background:#f8fafc; border-radius:8px;">
                <strong>Standard:</strong> Every production change must have a linked Jira issue and management approval.
             </div>
          </div>`
      },
      'a04': {
        title: 'Cloud Security: AWS Secrets Manager',
        html: `
          <div class="sim-badge">Real-Time Cloud Console</div>
          <div style="text-align:center;">
             <img src="./aws_secrets_manager_screenshot_1775714823104.png" class="sim-screenshot">
             <div style="margin-top:12px; font-size:12px; color:#64748b; text-align:left; padding:10px; background:#fff; border-radius:6px; border:1px solid #eee;">
                <strong>Protocol:</strong> Applications fetch keys via API; keys are never hardcoded in git.
             </div>
          </div>`
      },
      'a05': {
        title: 'Kibana: Security Log Viewer',
        html: `
          <div class="ui-widget" style="margin-top:0;">
            <div class="ui-header">📊 Elastic / Dashboard</div>
            <div class="ui-body" style="background:#111827; padding:25px;">
              <div style="font-family:monospace; font-size:13px;">
                <span style="color:#10b981;">{</span><br>
                &nbsp;&nbsp;<span style="color:#d1d5db;">"actor":</span> <span style="color:#38bdf8;">"user_8872"</span><span style="color:#d1d5db;">,</span><br>
                &nbsp;&nbsp;<span style="color:#d1d5db;">"action":</span> <span style="color:#38bdf8;">"elevate_privileges"</span><span style="color:#d1d5db;">,</span><br>
                &nbsp;&nbsp;<span style="color:#d1d5db;">"ssn":</span> <span style="color:#f87171;">"XXX-XX-1234"</span><br>
                <span style="color:#10b981;">}</span>
              </div>
            </div>
          </div>`
      },
      'a06': {
        title: 'Vulnerability Management Dashboard',
        html: `
          <div class="ui-widget" style="margin-top:0;">
            <div class="ui-header" style="background:#4b5563;">🔍 Dependabot Monitor</div>
            <div style="padding:20px; background:#fff;">
              <div style="background:#fee2e2; border-left:4px solid #ef4444; padding:15px; border-radius:4px; margin-bottom:15px;">
                <div style="font-weight:700; color:#991b1b; font-size:14px;">lodash (Remote Code Execution)</div>
                <div style="font-size:11px; color:#991b1b; margin-top:5px;">SLA: 48 Hours | Status: <span style="font-weight:800;">PENDING FIX</span></div>
              </div>
              <button class="btn-primary" style="width:100%;" onclick="this.innerHTML='PR #402 Created ✓'; this.style.background='#10b981';">Auto-Fix Dependency</button>
            </div>
          </div>`
      },
      'a07': {
        title: 'Privacy: Data Anonymization',
        html: `
          <div class="ui-widget" style="margin-top:0;">
            <div class="ui-header" style="background:#0f172a;">🛡️ Privacy & Anonymizer</div>
            <div class="ui-body">
              <div style="background:#f8fafc; border:1px solid #e2e8f0; padding:15px; border-radius:10px;">
                <div style="font-size:13px; font-weight:700; margin-bottom:10px;">Production Data Dump</div>
                <div style="background:#fff; border:1px solid #eee; padding:10px; font-family:monospace; font-size:11px;">
                  SELECT * FROM users; <br>
                  <span style="color:#10b981;">[Scrubbing PII...] Done.</span>
                </div>
              </div>
            </div>
          </div>`
      },
      'a08': {
        title: 'AI Governance: DLP Policy Enforcement',
        html: `
          <div class="ui-widget" style="margin-top:0;">
            <div class="ui-header">🤖 Enterprise Guard (DLP)</div>
            <div class="ui-body" style="padding: 20px;">
              <div style="background:#fff; border:1px solid #cbd5e1; border-radius:8px; padding:15px;">
                <div style="font-size:13px; color:#64748b; font-family:monospace;">Prompt: "Debug this AWS role: Secret=AKIA..."</div>
                <div style="margin-top:15px; background:#fee2e2; color:#991b1b; padding:12px; border-radius:6px; font-size:12px; font-weight:700; border: 1px solid #fecaca;">
                  ⚠️ Blocked: Corporate Data Leakage Detected (AWS Credential). Submission refused.
                </div>
              </div>
            </div>
          </div>`
      }
    };

    function openUIModal(area) {
      const data = uiSimulations[area];
      if (!data) return;
      document.getElementById('modal-title').innerText = data.title;
      document.getElementById('modal-body').innerHTML = data.html;
      document.getElementById('ui-modal').style.display = 'flex';
    }

    function closeUIModal() {
      document.getElementById('ui-modal').style.display = 'none';
    }

    // Close on overlay click
    document.getElementById('ui-modal').addEventListener('click', function (e) {
      if (e.target === this) closeUIModal();
    });

    // Old Slide Navigation
    let currentIndex = 0;

    function goToSlide(index) {
      const slides = document.querySelectorAll('.slide');
      const navItems = document.querySelectorAll('.side-nav-item');
      
      if (!slides.length || index < 0 || index >= slides.length) return;
      
      // Clean up current
      slides.forEach(s => s.classList.remove('active'));
      navItems.forEach(n => n.classList.remove('active'));
      
      currentIndex = index;
      slides[currentIndex].classList.add('active');
      if (navItems[currentIndex]) navItems[currentIndex].classList.add('active');
      
      // Sync progress dots if they exist
      const dots = document.querySelectorAll('.progress-dot');
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT') return;
      if (['Enter', 'Tab', 'ArrowRight', 'ArrowDown', 'PageDown', ' '].includes(e.key)) { 
        e.preventDefault(); 
        const slides = document.querySelectorAll('.slide');
        if (currentIndex < slides.length - 1) goToSlide(currentIndex + 1); 
      }
      else if (['Backspace', 'ArrowLeft', 'ArrowUp', 'PageUp'].includes(e.key)) { 
        e.preventDefault(); 
        if (currentIndex > 0) goToSlide(currentIndex - 1); 
      }
      else if (e.key === 'Escape') {
        if (document.getElementById('ui-modal').style.display === 'flex') {
          closeUIModal();
        } else if (document.body.classList.contains('slideshow-mode')) {
          toggleSlideshow();
        }
      }
    });

    function toggleSlideshow() {
      document.body.classList.toggle('slideshow-mode');
      const isFull = document.body.classList.contains('slideshow-mode');

      if (isFull) {
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        }
      } else {
        if (document.exitFullscreen && document.fullscreenElement) {
          document.exitFullscreen();
        }
      }
    }

    goToSlide(0);

    function runSSODemo() {
      document.getElementById('google-sso-modal').style.display = 'flex';
      document.getElementById('sso-error-msg').style.display = 'none';
    }
    function closeGoogleModal() { document.getElementById('google-sso-modal').style.display = 'none'; }
    function selectGoogleAccount(type) {
      if (type === 'corp') {
        document.getElementById('google-sso-modal').style.display = 'none';
        document.getElementById('sso-view-1').style.display = 'none';
        document.getElementById('sso-view-2').style.display = 'block';
      } else {
        document.getElementById('sso-error-msg').style.display = 'block';
      }
    }
    function resetSSODemo() {
      document.getElementById('sso-view-2').style.display = 'none';
      document.getElementById('sso-view-1').style.display = 'block';
    }

    function runMFADemo() {
      const input = document.getElementById('mfa-demo-val') || document.querySelector('.mfa-input');
      const val = input ? input.value : "";
      
      if (val.length >= 4) {
        const view1 = document.getElementById('mfa-view-1');
        const view2 = document.getElementById('mfa-view-2');
        if (view1 && view2) {
           view1.style.display = 'none';
           view2.style.display = 'block';
        } else {
           alert("Verification Successful!");
           closeUIModal();
        }
      } else {
        alert("Please enter a 6-digit code.");
      }
    }
    
    function resetMFADemo() {
      const view1 = document.getElementById('mfa-view-1');
      const view2 = document.getElementById('mfa-view-2');
      if (view1 && view2) {
         view1.style.display = 'block';
         view2.style.display = 'none';
      }
    }
  
    
    // Assign global functions from script that are called by inline onClick handlers
    window.openUIModal = openUIModal;
    window.closeUIModal = closeUIModal;
    window.toggleSlideshow = toggleSlideshow;
    window.runSSODemo = runSSODemo;
    window.closeGoogleModal = closeGoogleModal;
    window.selectGoogleAccount = selectGoogleAccount;
    window.resetSSODemo = resetSSODemo;
    window.runMFADemo = runMFADemo;
    window.resetMFADemo = resetMFADemo;
    window.refactorToEnvVars = () => {
      const el = document.getElementById('ide-demo-1');
      if (el) {
        el.innerHTML = '<span class="code-kw">const</span> <span class="code-var">dbPassword</span> = process.env.DB_PASSWORD; <span style="color:#27c93f;">// ✅ SECURE</span>\n<span class="code-kw">const</span> <span class="code-var">dbHost</span> = process.env.DB_HOST;';
      }
    };
    window.goToSlide = goToSlide;
    window.backToDashboard = () => {
      setCurrentView('dashboard');
      goToSlide(0); 
    };

    // Final initialization
    const presentationSlides = document.querySelectorAll('.slide');
    if (presentationSlides.length > 0) {
      presentationSlides[0].classList.add('active');
    }

  }, []);

  return (
    <>
      <nav id="navbar">
        <div className="nav-logos">
          <img src={mindbowserText} style={{ height: '90px', cursor: 'pointer' }} alt="Mindbowser" onClick={() => window.backToDashboard()} />
          <img src={mindbowserMark} style={{ height: '30px', cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => window.toggleSlideshow()} title="Click for Slideshow Mode" onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} />
        </div>
      </nav>

      <div className="dashboard-wrapper" style={{ 
        display: currentView === 'dashboard' ? 'block' : 'none', 
        minHeight: '100vh', 
        backgroundColor: '#0a0a1a', 
        color: '#ffffff', 
        fontFamily: '"Poppins", sans-serif', 
        paddingTop: '120px',
        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(123, 47, 190, 0.05) 0%, transparent 50%), radial-gradient(circle at 10% 20%, rgba(45, 201, 160, 0.05) 0%, transparent 40%)',
        overflowX: 'hidden'
      }}>
        {/* Hero Section */}
        <div className="dashboard-hero" style={{ padding: '0 80px', maxWidth: '1400px', margin: '0 auto', textAlign: 'center', marginBottom: '80px' }}>
          <div style={{ 
            display: 'inline-block', padding: '6px 16px', borderRadius: '20px', 
            background: 'rgba(45, 201, 160, 0.1)', border: '1px solid rgba(45, 201, 160, 0.2)',
            color: '#2DC9A0', fontSize: '13px', fontWeight: '600', marginBottom: '25px', letterSpacing: '1px', textTransform: 'uppercase'
          }}>
            Internal Engineering Excellence
          </div>
          <h1 style={{ 
            fontSize: '64px', fontWeight: '800', marginBottom: '20px', lineHeight: '1.2',
            background: 'linear-gradient(135deg, #fff 0%, #a5b4fc 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
          }}>
            Mindbowser <span style={{ color: '#7B2FBE' }}>Security</span> Training
          </h1>
          <p style={{ fontSize: '18px', color: '#a0a0b0', maxWidth: '700px', margin: '0 auto', lineHeight: '1.8' }}>
            Master the standards of modern engineering compliance. Interactive labs specifically designed for Mindbowser builders on SOC 2, Data Privacy, and Secure Infrastructure.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="dashboard-container" style={{ padding: '0 80px', maxWidth: '1200px', margin: '0 auto', paddingBottom: '100px' }}>


          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '30px' }}>
            {/* SOC 2 MODULE CARD */}
            <div 
              onClick={() => setCurrentView('presentation')}
              style={{
                background: 'rgba(255, 255, 255, 0.03)', 
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '24px', padding: '40px', cursor: 'pointer', transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                position: 'relative', overflow: 'hidden'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-15px)';
                e.currentTarget.style.borderColor = 'rgba(45, 201, 160, 0.4)';
                e.currentTarget.style.background = 'rgba(45, 201, 160, 0.05)';
                e.currentTarget.style.boxShadow = '0 30px 60px -12px rgba(45, 201, 160, 0.2)';
              }}
              onMouseOut={(e) => {
                 e.currentTarget.style.transform = 'translateY(0)';
                 e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                 e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                 e.currentTarget.style.boxShadow = 'none';
              }}
            >
               {/* Card Accent */}
               <div style={{ position: 'absolute', top: 0, right: 0, width: '150px', height: '150px', background: 'radial-gradient(circle at 100% 0%, rgba(45, 201, 160, 0.1) 0%, transparent 70%)' }}></div>
               
               <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px', position: 'relative' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'linear-gradient(135deg, #2DC9A0 0%, #25b892 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '20px', boxShadow: '0 10px 20px -5px rgba(45, 201, 160, 0.4)' }}>
                    <span style={{ fontSize: '28px' }}>🛡️</span>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#fff', margin: 0 }}>Secure Engineering</h3>
                    <div style={{ fontSize: '12px', color: '#2DC9A0', fontWeight: '600', letterSpacing: '0.5px' }}>AVAILABLE NOW</div>
                  </div>
               </div>
               
               <p style={{ color: '#94a3b8', fontSize: '15px', lineHeight: '1.7', marginBottom: '35px' }}>
                 Comprehensive SOC 2 walkthrough. Learn to handle PII, manage AWS secrets, and navigate security audits like a pro.
               </p>


            </div>
          </div>
        </div>
      </div>
      <div style={{ display: currentView === 'presentation' ? 'block' : 'none' }}>
        <div ref={containerRef} dangerouslySetInnerHTML={{ __html: `

  <button class="exit-slideshow" onclick="toggleSlideshow()">Exit Full View (ESC)</button>

  <div id="side-nav">
    <div class="side-nav-item active" onclick="goToSlide(0)">
      <div class="nav-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        </svg></div>
      <div class="nav-label">Start</div>
    </div>
    <div class="side-nav-item" onclick="goToSlide(1)">
      <div class="nav-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="6"></circle>
        </svg></div>
      <div class="nav-label">Objectives</div>
    </div>
    <div class="side-nav-item" onclick="goToSlide(2)">
      <div class="nav-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
        </svg></div>
      <div class="nav-label">Recap</div>
    </div>
    <div class="side-nav-item" onclick="goToSlide(3)">
      <div class="nav-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg></div>
      <div class="nav-label">Lab: SSO & MFA</div>
    </div>
    <div class="side-nav-item" onclick="goToSlide(4)">
      <div class="nav-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg></div>
      <div class="nav-label">Lab: Phishing</div>
    </div>
    <div class="side-nav-item" onclick="goToSlide(5)">
      <div class="nav-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg></div>
      <div class="nav-label">1. Secure Dev</div>
    </div>
    <div class="side-nav-item" onclick="goToSlide(6)">
      <div class="nav-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        </svg></div>
      <div class="nav-label">Lab: Hardcoded Secrets</div>
    </div>
    <div class="side-nav-item" onclick="goToSlide(7)">
      <div class="nav-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
        </svg></div>
      <div class="nav-label">2. Env & Access</div>
    </div>
    <div class="side-nav-item" onclick="goToSlide(8)">
      <div class="nav-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <line x1="6" y1="3" x2="6" y2="15"></line>
          <circle cx="18" cy="6" r="3"></circle>
          <circle cx="6" cy="18" r="3"></circle>
        </svg></div>
      <div class="nav-label">3. Change Mgmt</div>
    </div>
    <div class="side-nav-item" onclick="goToSlide(9)">
      <div class="nav-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path
            d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4">
          </path>
        </svg></div>
      <div class="nav-label">4. Secrets & Config</div>
    </div>
    <div class="side-nav-item" onclick="goToSlide(10)">
      <div class="nav-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="18" cy="18" r="3"></circle>
          <circle cx="6" cy="6" r="3"></circle>
          <path d="M13 6h3a2 2 0 0 1 2 2v7"></path>
          <line x1="6" y1="9" x2="6" y2="21"></line>
        </svg></div>
      <div class="nav-label">Lab: PR Block</div>
    </div>
    <div class="side-nav-item" onclick="goToSlide(11)">
      <div class="nav-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg></div>
      <div class="nav-label">5. Logging</div>
    </div>
    <div class="side-nav-item" onclick="goToSlide(12)">
      <div class="nav-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
        </svg></div>
      <div class="nav-label">Lab: Kibana Masking</div>
    </div>
    <div class="side-nav-item" onclick="goToSlide(13)">
      <div class="nav-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
        </svg></div>
      <div class="nav-label">6. Vulnerability Mgmt</div>
    </div>
    <div class="side-nav-item" onclick="goToSlide(14)">
      <div class="nav-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg></div>
      <div class="nav-label">Lab: Dependabot</div>
    </div>
    <div class="side-nav-item" onclick="goToSlide(15)">
      <div class="nav-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path
            d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z">
          </path>
        </svg></div>
      <div class="nav-label">7. Data Privacy</div>
    </div>
    <div class="side-nav-item" onclick="goToSlide(16)">
      <div class="nav-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <rect x="3" y="11" width="18" height="10" rx="2"></rect>
          <circle cx="12" cy="5" r="2"></circle>
        </svg></div>
      <div class="nav-label">8. AI Guidelines</div>
    </div>
    <div class="side-nav-item" onclick="goToSlide(17)">
      <div class="nav-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path
            d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z">
          </path>
        </svg></div>
      <div class="nav-label">Lab: AI DLP</div>
    </div>
    <div class="side-nav-item" onclick="goToSlide(18)">
      <div class="nav-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <line x1="4" y1="22" x2="4" y2="15"></line>
          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
        </svg></div>
      <div class="nav-label">Summary</div>
    </div>
  </div>

  <div id="deck">

    <section class="slide bg-hero active">
      <div class="container" style="text-align: center;">
        <div class="sup">Engineer's Training</div>
        <div class="hd">Secure Engineering<br>&amp; Compliance</div>
      </div>
    </section>

    <section class="slide bg-light">
      <div class="container">
        <div class="topic-block" style="display: flex; gap: 40px;">
          <div style="flex: 1.5;">
            <h3 class="topic-title">Training Objectives</h3>
            <ul class="bl" style="font-size: 17px; margin-bottom: 20px;">
              <li><strong>Zero Trust Architecture:</strong> Assume breach, never trust, always verify.</li>
              <li>Understanding Engineering Security Principles for SOC 2.</li>
              <li>Engineering Security Guide spanning 8 Key Operational Areas.</li>
              <li>Responsible and Secure usage of AI in the workplace.</li>
            </ul>
            <div class="alert-tag success">✓ This builds directly on your Employee Security Guide.</div>
          </div>
          <div
            style="flex: 1; background: rgba(123, 47, 190, 0.05); padding: 25px; border-radius: 12px; border: 1px solid rgba(123, 47, 190, 0.1);">
            <div class="badge">Who This Applies To</div>
            <ul class="bl" style="margin-top: 10px;">
              <li>Developers &amp; Designers</li>
              <li>QA &amp; DevOps</li>
              <li>Project Managers &amp; BA</li>
              <li>Technical Leads</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="slide bg-light">
      <div class="container">
        <div class="topic-block">
          <span class="topic-number">Prerequisite</span>
          <h3 class="topic-title">Quick Reference: Essentials</h3>
          <div class="tc">
            <div class="col">
              <div class="ch">
                <div class="ck">&#10003;</div> Identity & Endpoint
              </div>
              <ul class="bl">
                <li>Use <strong>SSO</strong> for all tools — always click "Login with Google".</li>
                <li>Enable <strong>MFA</strong> everywhere.</li>
                <li>Keep <strong>Antivirus enabled</strong></li>
                <li><strong>Lock your screen</strong> when leaving your desk.</li>
              </ul>
            </div>
            <div class="col">
              <div class="ch">
                <div class="ck">&#10003;</div> Network & Incidents
              </div>
              <ul class="bl">
                <li>Use the <strong>company VPN</strong> on untrusted networks.<span class="eg-text">
                    Connecting to VPN when working from Starbucks.</span></li>
                <li>Keep data on <strong>official tools only</strong> (no personal WhatsApp/Gmail).<span
                    class="eg-text"> Sending assets via Slack instead of WhatsApp.</span></li>
                <li><strong>Hover over links</strong> to verify URLs.</li>
                <li>Report incidents <strong>immediately</strong> — don't cover them up.<span class="eg-text"> Emailing
                    IT immediately after receiving a suspicious email or clicking a phishing link.</span></li>
              </ul>
            </div>
          </div>
          <div class="alert-tag danger">⚠️ Report any suspicious email, accidental data leak, or security concern to
            IT/Security immediately. Time is critical.</div>

        </div>
      </div>
    </section>

    <section class="slide bg-light">
      <div class="container">
        <div class="topic-block"
          style="text-align: center; margin-bottom: 10px; border-bottom: none; box-shadow: none; background: transparent;">
          <h3 class="topic-title" style="border: none; margin-bottom: 0;">Interactive Lab: Access Enforcement</h3>
        </div>
        <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 20px;">
          <div class="ui-widget" style="margin-top:0;">
            <div class="ui-header">🌐 Single Sign-On (SSO) Demo</div>
            <div class="ui-body"
              style="text-align:center; height: 180px; display:flex; flex-direction:column; justify-content:center; align-items:center;">
              <div id="sso-view-1">
                <div style="font-size:14px; margin-bottom:15px; color:#64748b; font-weight:600;">🔐 Mindbowser Identity
                  Portal</div>
                <button class="btn-primary"
                  style="background:#fff; color:#333; border:1px solid #ccc; font-weight: 500;" onclick="runSSODemo()">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" height="18">
                  Sign In via SSO
                </button>
              </div>
              <div id="sso-view-2" style="display:none; color:#166534;">
                <div style="font-size:32px; margin-bottom:10px;">✅</div>
                <div style="font-weight:700;">Authenticated via Google Workspace</div>
                <button onclick="resetSSODemo()"
                  style="margin-top:10px; font-size:12px; border:none; background:none; text-decoration:underline; cursor:pointer; color:#64748b;">Reset</button>
              </div>
            </div>
          </div>

          <div class="ui-widget" style="margin-top:0;">
            <div class="ui-header">📱 Multi-Factor Auth (MFA) Demo</div>
            <div class="ui-body"
              style="text-align:center; height: 180px; display:flex; flex-direction:column; justify-content:center; align-items:center;">
              <div id="mfa-view-1">
                <div style="font-size:13px; margin-bottom:15px; color:#64748b;">Enter 6-digit code from Authenticator
                  app</div>
                <input type="text" class="ui-input mfa-input" id="mfa-demo-val" placeholder="------" maxlength="6"
                  style="margin-bottom:15px; width: 150px; outline: 2px solid var(--pur);">
                <button class="btn-primary" style="background:var(--pur); width: 100%;" onclick="runMFADemo()">Verify
                  Code</button>
              </div>
              <div id="mfa-view-2" style="display:none; color:#166534;">
                <div style="font-size:32px; margin-bottom:10px;">🛡️</div>
                <div style="font-weight:700;">Identity Verified Securely</div>
                <button onclick="resetMFADemo()"
                  style="margin-top:10px; font-size:12px; border:none; background:none; text-decoration:underline; cursor:pointer; color:#64748b;">Reset</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="slide bg-light">
      <div class="container">
        <div class="topic-block"
          style="text-align: center; margin-bottom: 10px; border-bottom: none; box-shadow: none; background: transparent;">
          <h3 class="topic-title" style="border: none; margin-bottom: 0;">Interactive Lab: Hover Verification</h3>
        </div>
        <div class="demo-center-wrapper">
          <div class="ui-widget demo-widget-lg">
            <div class="ui-header">
              <div class="mac-dots">
                <div class="mac-dot r"></div>
                <div class="mac-dot y"></div>
                <div class="mac-dot g"></div>
              </div> ✉️ Mail UI
            </div>
            <div class="ui-body" style="padding-bottom: 40px;">
              <div style="font-weight: bold; margin-bottom: 5px;">From: IT Support
                &lt;it-admin@mindbowser-updates.net&gt;</div>
              <p style="font-size: 14px; margin-bottom: 15px;">Your Google Workspace password expires within the
                standard period. Click
                below to retain access to your repository.</p>

              <div class="hover-container">
                <button class="btn-primary"
                  onclick="alert('Failed! The tooltip reveals an external payload URL. Always check before clicking.')">Keep
                  Same Password</button>
                <div class="phish-tooltip">https://evil-login-spoof.ru/payload.exe</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="slide bg-light">
      <div class="container">
        <div class="topic-block">
          <span class="topic-number">Area 01</span>
          <h3 class="topic-title">Secure Development</h3>
          <div class="tc">
            <div class="col">
              <div class="ch">
                <div class="ck">&#10003;</div> Must Do
              </div>
              <ul class="bl">
                <li>Follow <strong style="text-decoration:underline; cursor:pointer; color:var(--pur);"
                    onclick="openUIModal('secureCoding')">secure coding standards</strong> (input validation, auth,
                  error handling).<span class="eg-text"> Using secure input fields so hackers can't inject malicious
                    database
                    commands.</span></li>
                <li>Ensure all production-bound changes have a <strong>peer review</strong> before merging.<span
                    class="eg-text"> Requiring at least 1 approving review on a GitHub Pull
                    Request.</span></li>
                <li>Use only <strong>approved languages, frameworks, and libraries</strong>; keep them updated.<span
                    class="eg-text"> Using the standard approved tools instead of downloading random
                    untested ones.</span></li>
              </ul>
              <div class="bpc" style="margin-top:15px;">
                <div class="bpt">Shift-Left Mentality</div>
                <ul class="bl">
                  <li>Catch vulnerabilities directly in the IDE or PR phase. Security is a feature, not an
                    afterthought.<span class="eg-text"> Utilizing a SonarLint IDE plugin to catch bugs as
                      you type.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col">
              <div class="ch">
                <div class="cx">&#10005;</div> Don't Do
              </div>
              <ul class="bl">
                <li><strong>Do not hard-code secrets</strong> (passwords, tokens, keys) in code, config, or tests.<span
                    class="eg-text"> Replacing "API_KEY=123" with "process.env.API_KEY".</span></li>
                <li><strong>Do not paste unvetted code</strong> directly from the internet into production without
                  careful review.<span class="eg-text"> Blindly copying a massive StackOverflow script
                    without understanding what it does.</span></li>
              </ul>
              <div class="example-box">
                <span class="example-label">Action Item</span>
                <p class="example-text">Replacing in-code DB credentials with Env Vars. Reference online snippets for
                  logic, but never copy-paste directly without review.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="slide bg-light">
      <div class="container">
        <div class="topic-block"
          style="text-align: center; margin-bottom: 10px; border-bottom: none; box-shadow: none; background: transparent;">
          <h3 class="topic-title" style="border: none; margin-bottom: 0;">Interactive Lab: Hardcoded Secrets</h3>
        </div>
        <div class="demo-center-wrapper">
          <div class="ui-widget demo-widget-lg" style="background: #1e1e1e;">
            <div class="ui-header" style="background:#2d2d2d; color:#999; border:none;">
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg"
                height="14"> database.js - VS Code
            </div>
            <div class="ui-body" style="padding: 0;">
              <pre class="ide-code"
                id="ide-demo-1"><span class="code-kw">const</span> <span class="code-var">dbPassword</span> = <span class="code-str">"ProdAdmin!@#2026"</span>; <span style="color:#f48771;">// ❌ DANGER</span>
<span class="code-kw">const</span> <span class="code-var">dbHost</span> = <span class="code-str">"rds.us-east.aws.com"</span>;</pre>
              <div style="padding: 15px; border-top: 1px solid #333; background: #252526;">
                <button class="btn-primary" style="background: var(--teal);"
                  onclick="refactorToEnvVars()">Refactor
                  to Env Vars</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="slide bg-light">
      <div class="container">
        <div class="topic-block">
          <span class="topic-number">Area 02</span>
          <h3 class="topic-title">Environment &amp; Access Management</h3>
          <div class="tc">
            <div class="col">
              <div class="ch">
                <div class="ck">&#10003;</div> Must Do
              </div>
              <ul class="bl">
                <li>Maintain strict separation between <strong>dev, test, stage, and prod</strong> environments.<span
                    class="eg-text"> Making sure the test server can never accidentally talk to the live
                    customer database.</span></li>
                <li>Restrict <strong>production access</strong> to those who strictly need it.<span class="eg-text">
                    Granting temporary AWS ReadOnly access rather than permanent Admin
                    keys.</span></li>
                <li>Reference <strong>tickets / change IDs</strong> when modifying production.<span class="eg-text">
                    Including "JIRA-405" in the commit message that deploys to
                    prod.</span></li>
              </ul>
              <div class="bpc" style="margin-top:15px;">
                <div class="bpt">Defense in Depth</div>
                <ul class="bl">
                  <li>Every layer (network, application, database) must verify identity independently.<span
                      class="eg-text"> Forcing servers to prove who they are with digital ID
                      cards.</span></li>
                </ul>
              </div>
            </div>
            <div class="col">
              <div class="ch">
                <div class="cx">&#10005;</div> Don't Do
              </div>
              <ul class="bl">
                <li><strong>Do not make ad-hoc changes</strong> in production (DB updates, config edits) outside the
                  process.<span class="eg-text"> Manually deleting a user from the live
                    database.</span></li>
                <li><strong>Do not use raw production data</strong> in non-production environments without masking.<span
                    class="eg-text"> Replacing all emails with fake@test.com when migrating a prod dump to
                    staging.</span></li>
              </ul>
              <div class="example-box">
                <span class="example-label">Action Item</span>
                <p class="example-text">Requesting temporary AWS ReadOnly access for debugging. Using anonymized data
                  exports for local testing rather than live production dumps.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section class="slide bg-light">
      <div class="container">
        <div class="topic-block">
          <span class="topic-number">Area 03</span>
          <h3 class="topic-title">Change &amp; Release Management</h3>
          <div class="tc">
            <div class="col">
              <div class="ch">
                <div class="ck">&#10003;</div> Must Do
              </div>
              <ul class="bl">
                <li>Raise a <strong>change ticket</strong> for all prod changes (incl. scope, risk, rollback plan).<span
                    class="eg-text"> Filing a Jira Service Desk ticket before altering production DNS
                    records.</span></li>
                <li>Use <strong>CI/CD pipelines</strong> to build, test, and deploy where possible.<span
                    class="eg-text"> Using an automated system to push code instead of copying files
                    manually.</span></li>
                <li>Validate deployments with <strong>smoke tests and log checks</strong>.<span class="eg-text">
                    Automatically running a full test check right after
                    publishing.</span></li>
              </ul>
            </div>
            <div class="col">
              <div class="ch">
                <div class="cx">&#10005;</div> Don't Do
              </div>
              <ul class="bl">
                <li><strong>Do not bypass pipeline checks</strong> (tests, security scans) without a documented
                  exception.<span class="eg-text"> Forcing your code live even though the automated test
                    failed.</span></li>
                <li><strong>Do not push "quick fixes"</strong> directly to production without testing.<span
                    class="eg-text"> SSHing to modify CSS on the live server, bypassing GitHub
                    completely.</span></li>
              </ul>
              <div class="example-box">
                <span class="example-label">Action Item</span>
                <p class="example-text">Implement hotfixes as well-scoped changes via the pipeline with a ticket. If a
                  check blocks a valid deployment, obtain explicit approval first.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="slide bg-light">
      <div class="container">
        <div class="topic-block">
          <span class="topic-number">Area 04</span>
          <h3 class="topic-title">Secrets, Encryption &amp; Configuration</h3>
          <div class="tc">
            <div class="col">
              <div class="ch">
                <div class="ck">&#10003;</div> Must Do
              </div>
              <ul class="bl">
                <li>Store all secrets in <strong>approved secret managers</strong> (AWS KMS, Vault).<span
                    class="eg-text"> Using a secure password manager tool to handle database
                    logins.</span></li>
                <li>Use <strong>HTTPS / TLS</strong> for all external and sensitive internal comms.<span
                    class="eg-text"> Making sure the URL starts with 'https://' instead of
                    'http://'.</span></li>
                <li>Enable <strong>encryption at rest</strong> for DBs and object storage.<span class="eg-text"> Turning
                    on 'encrypt data' when saving client bills in cloud
                    storage.</span></li>
              </ul>
            </div>
            <div class="col">
              <div class="ch">
                <div class="cx">&#10005;</div> Don't Do
              </div>
              <ul class="bl">
                <li><strong>Do not commit secrets</strong> to git, tickets, chat, or logs.<span class="eg-text"> Pasting
                    a sensitive login token into a public Jira ticket.</span></li>
                <li><strong>Do not leave default credentials</strong> or demo accounts active in prod.<span
                    class="eg-text"> Accidentally leaving a blank default password on a newly launched
                    server.</span></li>
              </ul>
              <div class="example-box">
                <span class="example-label">Action Item</span>
                <p class="example-text">Replacing hardcoded API keys with secure vault references. If a key is leaked,
                  rotate it immediately and scrub the Git history.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="slide bg-light">
      <div class="container">
        <div class="topic-block"
          style="text-align: center; margin-bottom: 10px; border-bottom: none; box-shadow: none; background: transparent;">
          <h3 class="topic-title" style="border: none; margin-bottom: 0;">Interactive Lab: Pipeline Git Hook</h3>
        </div>
        <div class="demo-center-wrapper">
          <div class="ui-widget demo-widget-lg" style="margin-top: 0;">
            <div class="ui-header">Pull Request #142 - Add Stripe Integration</div>
            <div class="ui-body">
              <div style="font-size:14px; margin-bottom:10px; font-weight:600;">Files Changed: <span
                  style="color:#ef4444;">.env</span></div>
              <pre
                style="background:#fef2f2; border:1px solid #fca5a5; padding:12px; font-family:monospace; font-size:13px; color:#991b1b; border-radius:6px;">+ STRIPE_LIVE_KEY=sk_live_51Mabcde123456789xyz...</pre>
              <div style="margin-top:15px; display:flex; gap:10px; align-items:center;">
                <button class="btn-danger" disabled style="opacity:0.6; cursor:not-allowed;">Commit Changes
                  (Blocked)</button>
                <div style="font-size:13px; color:#64748b;">Blocked by Pre-Commit Hook (GitGuardian) - Secret Detected
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="slide bg-light">
      <div class="container">
        <div class="topic-block">
          <span class="topic-number">Area 05</span>
          <h3 class="topic-title">Logging, Monitoring &amp; Observability</h3>
          <div class="tc">
            <div class="col">
              <div class="ch">
                <div class="ck">&#10003;</div> Must Do
              </div>
              <ul class="bl">
                <li>Log key security/business events: <strong>auth attempts, permission changes, major
                    errors</strong>.<span class="eg-text"> Emitting a log when a user is granted Admin
                    privileges.</span></li>
                Outputting logs in JSON instead of raw text strings.</span></li>
                <li>Work with DevOps to configure <strong>alerts</strong> for security patterns.<span class="eg-text">
                    Pinging Slack if excessive failed login attempts happen within the standard period.</span></li>
              </ul>
            </div>
            <div class="col">
              <div class="ch">
                <div class="cx">&#10005;</div> Don't Do
              </div>
              <ul class="bl">
                <li><strong>Do not log PHI, passwords</strong>, tokens, or full request bodies.<span class="eg-text">
                    Accidentally printing the user object which contains clear-text
                    passwords.</span></li>
                <li><strong>Do not disable/delete logs</strong> related to incidents to "save time/space".<span
                    class="eg-text"> Deleting server logs manually to free up disk space.</span></li>
              </ul>
              <div class="example-box">
                <span class="example-label">Action Item</span>
                <p class="example-text">Logging <code>"fields_updated": ["email"]</code> instead of raw values. Tuning
                  log filters if noisy, but preserving historical evidence.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="slide bg-light">
      <div class="container">
        <div class="topic-block"
          style="text-align: center; margin-bottom: 10px; border-bottom: none; box-shadow: none; background: transparent;">
          <h3 class="topic-title" style="border: none; margin-bottom: 0;">Interactive Lab: Data Masking</h3>
        </div>
        <div class="demo-center-wrapper">
          <div class="ui-widget demo-widget-lg" style="margin-top:0;">
            <div class="ui-header" style="justify-content:space-between;">
              <div>📊 Log Viewer</div>
              <button class="btn-primary" style="font-size:12px; padding:4px 8px; background:var(--pur);"
                onclick="document.getElementById('log-data').innerHTML = '{<br>  &quot;event&quot;: &quot;user_registration&quot;,<br>  &quot;status&quot;: &quot;success&quot;,<br>  &quot;user_id&quot;: &quot;usr_abc123&quot;,<br>  &quot;fields_collected&quot;: [&quot;email&quot;, &quot;ssn&quot;]<br>}';">Enable
                SOC2 Data Masking</button>
            </div>
            <div class="ui-body" style="background: #0f172a; height: 100%;">
              <div class="log-entry" id="log-data">
                {<br> "event": "user_registration",<br> "status": "success",<br> <span style="color:#ef4444;">"email":
                  "johndoe@gmail.com",</span><br> <span style="color:#ef4444;">"ssn": "123-45-6789"</span><br>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="slide bg-light">
      <div class="container">
        <div class="topic-block">
          <span class="topic-number">Area 06</span>
          <h3 class="topic-title">Vulnerability &amp; Risk Management</h3>
          <div class="tc">
            <div class="col">
              <div class="ch">
                <div class="ck">&#10003;</div> Must Do
              </div>
              <ul class="bl">
                <li>Fix vulnerabilities within <strong>defined SLAs</strong> (Critical/High priority).<span
                    class="eg-text"> Fixing a major security bug within the standard period (tracked via the EQI
                    tool).</span></li>
                <li>Address findings from <strong>SAST, DAST, and dependency scans</strong>.<span class="eg-text">
                    Clicking 'update' when the scanner warns of an outdated unsafe
                    tool.</span></li>
                <li>Participate in <strong>threat modeling</strong> for major architecture changes.<span
                    class="eg-text"> Checking with the security team before starting a huge, complex app
                    rewrite.</span></li>
              </ul>
            </div>
            <div class="col">
              <div class="ch">
                <div class="cx">&#10005;</div> Don't Do
              </div>
              <ul class="bl">
                <li><strong>Do not ignore notifications</strong> from scanners or researchers.<span class="eg-text">
                    Clicking 'ignore' on a virus warning just so the tests
                    pass.</span></li>
                <li><strong>Do not deploy known-vulnerable</strong> components without exception controls.<span
                    class="eg-text"> Uploading known bad code without setting up an extra protective
                    shield.</span></li>
              </ul>
              <div class="example-box">
                <span class="example-label">Action Item</span>
                <p class="example-text">Patching Critical bugs within the standard period. If you must deploy with a
                  known risk,
                  apply compensating controls like WAF rules.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="slide bg-light">
      <div class="container">
        <div class="topic-block"
          style="text-align: center; margin-bottom: 10px; border-bottom: none; box-shadow: none; background: transparent;">
          <h3 class="topic-title" style="border: none; margin-bottom: 0;">Interactive Lab: Vuln Triage</h3>
        </div>
        <div class="demo-center-wrapper">
          <div class="ui-widget demo-widget-lg" style="margin-top:0;">
            <div class="ui-header">🛡️ Dependabot Security Dashboard</div>
            <div class="ui-body" style="display:flex; flex-direction:column; gap:15px; align-items:flex-start;">
              <div>
                <div style="font-weight:700; font-size:16px;">Remote Code Execution (RCE) in \`lodash\`</div>
                <div style="font-size:13px; color:#64748b; margin-top:5px;">Severity: <span
                    style="background:#fee2e2; color:#991b1b; padding:2px 6px; border-radius:4px; font-weight:bold;">CRITICAL</span>
                  | Introduced within the standard period</div>
              </div>
              <button class="btn-primary" id="btn-fix-vuln" style="width: 100%; padding: 12px;"
                onclick="this.innerHTML='✅ Automated Fix PR Created'; this.style.background='#10b981'; this.disabled=true;">Generate
                Fix PR</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="slide bg-light">
      <div class="container">
        <div class="topic-block">
          <span class="topic-number">Area 07</span>
          <h3 class="topic-title">Data Protection &amp; Privacy in Apps</h3>
          <div class="tc">
            <div class="col">
              <div class="ch">
                <div class="ck">&#10003;</div> Must Do
              </div>
              <ul class="bl">
                Don't ask for a user's home address if they are just downloading a free software guide.</span></li>
                <li><strong>Classify data fields</strong> ( PHI, internal) and apply appropriate technical
                  so it gets extra security.</span>
                </li>
                <li>Implement <strong>data retention and deletion rules</strong> (cleanup jobs).<span class="eg-text">
                    Automatically deleting old test accounts after the standard period.</span></li>
              </ul>
            </div>
            <div class="col">
              <div class="ch">
                <div class="cx">&#10005;</div> Don't Do
              </div>
              <ul class="bl">
                full HTTP payload when processing credit card payments.</span></li>
                <li><strong>Do not expose internal details</strong> via verbose error responses in production.<span
                    class="eg-text"> Showing the exact line of broken hidden code directly to the web
                    user.</span></li>
              </ul>
              <div class="example-box">
                <span class="example-label">Action Item</span>
                <p class="example-text">Using generic error messages for end-users. Setting S3 Lifecycle Policies to
                  auto-delete logs after the standard period.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="slide bg-light">
      <div class="container">
        <div class="topic-block">
          <span class="topic-number">Area 08 & Part C</span>
          <h3 class="topic-title">AI &amp; Automation / Responsible Use</h3>
          <div class="tc">
            <div class="col">
              <div class="ch">
                <div class="ck">&#10003;</div> Must Do
              </div>
              <ul class="bl">
                <li>Use <strong>company-approved AI tools</strong> for drafting/refactoring.<span class="eg-text"> Using
                    the private team AI tool instead of free public chat
                    tools.</span></li>
                <li>Treat AI code as <strong>drafts</strong> requiring thorough human review.<span class="eg-text">
                    Reading the code the AI wrote line-by-line before trusting
                    it.</span></li>
                Asking "How to mock a db call to 'table_a'" rather than pasting your exact schema.</span></li>
              </ul>
            </div>
            <div class="col">
              <div class="ch">
                <div class="cx">&#10005;</div> Don't Do
              </div>
              <ul class="bl">
                <li><strong>Do not paste full repos, configs, or customer data</strong> into public AI.<span
                    class="eg-text"> Accidentally giving ChatGPT an API key to rewrite a
                    function.</span></li>
                Pushing AI-generated code directly to the live branch without running any tests.</span></li>
                <li><strong>Do not rely solely on AI</strong> for security or compliance decisions.<span
                    class="eg-text"> Blindly trusting an AI when it says a complicated piece of code is
                    totally safe to use.</span></li>
              </ul>
              <div class="example-box">
                <span class="example-label">Action Item</span>
                <p class="example-text">Swapping real API keys with <code>sk_test_xxx</code> in AI prompts. You own the
                  final output—never trust AI code without line-by-line review.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="slide bg-light">
      <div class="container">
        <div class="topic-block"
          style="text-align: center; margin-bottom: 10px; border-bottom: none; box-shadow: none; background: transparent;">
          <h3 class="topic-title" style="border: none; margin-bottom: 0;">Interactive Lab: Enterprise DLP & AI</h3>
        </div>
        <div class="demo-center-wrapper">
          <div class="ui-widget demo-widget-lg" style="margin-top:0;">
            <div class="ui-header">🤖 Enterprise Copilot Chat</div>
            <div class="ui-body"
              style="background:#f8fafc; height:260px; display:flex; flex-direction:column; justify-content:flex-end;">
              <div id="ai-response"
                style="display:none; background:#fee2e2; color:#991b1b; padding:10px; border-radius:8px; border-left:4px solid #ef4444; font-size:13px; margin-bottom:15px; font-weight:600;">
                Enterprise DLP Alert: Message blocked. Sensitive credential (AWS Access Key) detected in prompt. Please
                sanitize your input.
              </div>
              <div style="background:#fff; border:1px solid #cbd5e1; border-radius:8px; padding:10px;">
                <input type="text" value="Can you optimize this? AWS_KEY=AKIAIOSFODNN7EXAM"
                  style="width:100%; border:none; outline:none; font-size:13px; color:#64748b;" readonly>
                <div style="display:flex; justify-content:flex-end; margin-top:10px;">
                  <button class="btn-primary" style="padding:4px 12px; font-size:12px;"
                    onclick="document.getElementById('ai-response').style.display='block';">Send Prompt</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="slide bg-dark">
      <div class="container">
        <div class="ttl" style="font-size: 42px; color: #ffffff; font-weight: 900;">Summary & Action Items</div>
        <div class="tc" style="margin-top: 30px; gap: 60px;">
          <div class="col">
            <ul class="dl" style="list-style: none; padding: 0;">
              <li style="color:#fff; margin-bottom: 8px; position:relative; padding-left: 20px;"><span
                  style="position:absolute; left:0; color:var(--teal);">●</span> Never hardcode secrets.<span
                  class="eg-text"> Replacing in-code DB credentials with Env Vars.</span></li>
              <li style="color:#fff; margin-bottom: 8px; position:relative; padding-left: 20px;"><span
                  style="position:absolute; left:0; color:var(--teal);">●</span> Enforce SSO + MFA for prod access.<span
                  class="eg-text"> Always signing in via Google and submitting an authenticator code.</span>
              </li>
              <li style="color:#fff; margin-bottom: 8px; position:relative; padding-left: 20px;"><span
                  style="position:absolute; left:0; color:var(--teal);">●</span> Raise a ticket before every prod
                change.<span class="eg-text"> Logging an issue in Jira for a quick hotfix deployment.</span>
              </li>
              <li style="color:#fff; margin-bottom: 8px; position:relative; padding-left: 20px;"><span
                  style="position:absolute; left:0; color:var(--teal);">●</span> Separate real prod data from
                dev/test.<span class="eg-text"> Anonymizing user tables before migrating them to
                  staging.</span></li>
              <li style="color:#fff; margin-bottom: 8px; position:relative; padding-left: 20px;"><span
                  style="position:absolute; left:0; color:var(--teal);">●</span> Never log PHI or tokens.<span
                  class="eg-text"> Omitting user passwords from Kibana logs.</span></li>
              <li style="color:#fff; margin-bottom: 8px; position:relative; padding-left: 20px;"><span
                  style="position:absolute; left:0; color:var(--teal);">●</span> Fix vulnerabilities inside SLA
                windows.<span class="eg-text"> Patching Critical bugs flagged by Dependabot within the standard
                  period.</span></li>
              <li style="color:#fff; margin-bottom: 8px; position:relative; padding-left: 20px;"><span
                  style="position:absolute; left:0; color:var(--teal);">●</span> Sanitize data before using AI.<span
                  class="eg-text"> Swapping real API keys with 'sk_test_xxx' in ChatGPT prompts.</span></li>
            </ul>
          </div>
          <div class="col">
            <div style="font-size:22px;color:var(--yellow);margin-bottom:20px;font-weight:700;">The Big Picture</div>
            <p style="color:#cbd5e1; margin-bottom:15px; font-size: 15px;">SOC 2 is not a one-time checklist. It's built
              into your daily commit, your code review, and your pipeline.</p>
            <p style="color:#cbd5e1; margin-bottom:15px; font-size: 15px;">Small actions—a ticket, a peer review,
              rotating a key—prevent major breaches.</p>
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1);">
              <div style="font-size:14px;color:#fff; margin-bottom: 8px;">Queries / Access Requests / Incidents:</div>
              <div style="font-size:18px; font-weight:700;"><strong
                  style="color:var(--teal);">compliance@mindbowser.com</strong></div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>

` }} />
      </div>

      <div id="google-sso-modal" style={{ display: 'none', position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.6)', zIndex: 10000, alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(3px)' }}>
        <div style={{ background: '#fff', width: '420px', borderRadius: '8px', boxShadow: '0 8px 32px rgba(0,0,0,0.25)', padding: '40px 36px', textAlign: 'center', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" height="26" style={{ marginBottom: '16px' }} />
          <h2 style={{ fontSize: '22px', fontWeight: '400', color: '#202124', marginBottom: '8px' }}>Choose an account</h2>
          <p style={{ fontSize: '15px', color: '#5f6368', marginBottom: '30px' }}>to continue to <strong>Mindbowser Identity</strong></p>

          <div style={{ textAlign: 'left', border: '1px solid #dadce0', borderRadius: '8px', overflow: 'hidden' }}>
            <div 
              style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '14px 18px', borderBottom: '1px solid #dadce0', cursor: 'pointer' }}
              onClick={() => window.selectGoogleAccount('corp')} 
              onMouseOver={(e) => e.currentTarget.style.background = '#f8f9fa'} onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
            >
              <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: '#7B2FBE', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '600', fontSize: '16px' }}>R</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: '500', fontSize: '14px', color: '#3c4043' }}>Rishikesh</div>
                <div style={{ fontSize: '12px', color: '#5f6368' }}>rishikesh@mindbowser.com</div>
              </div>
            </div>

            <div 
              style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '14px 18px', cursor: 'pointer' }}
              onClick={() => window.selectGoogleAccount('personal')}
              onMouseOver={(e) => e.currentTarget.style.background = '#f8f9fa'} onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
            >
              <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: '#1a73e8', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '600', fontSize: '16px' }}>R</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: '500', fontSize: '14px', color: '#3c4043' }}>Rishikesh (Personal)</div>
                <div style={{ fontSize: '12px', color: '#5f6368' }}>rishikesh.dev@gmail.com</div>
              </div>
            </div>
          </div>

          <div id="sso-error-msg" style={{ display: 'none', color: '#d93025', fontSize: '13px', marginTop: '20px', textAlign: 'left', padding: '10px', background: '#fce8e6', borderRadius: '6px', fontWeight: '500' }}>
            <svg style={{ width: '16px', height: '16px', verticalAlign: 'middle', marginRight: '6px', marginTop: '-2px' }} viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
            </svg>
            Access Denied: Please use your corporate Mindbowser account.
          </div>

          <div style={{ textAlign: 'left', marginTop: '30px' }}>
            <button style={{ fontSize: '14px', color: '#1a73e8', background: 'none', border: 'none', cursor: 'pointer', fontWeight: '500', padding: '8px 16px', borderRadius: '4px' }} onClick={() => window.closeGoogleModal()}>Cancel</button>
          </div>
        </div>
      </div>

      <div className="modal-overlay" id="ui-modal" style={{ display: 'none' }}>
        <div className="modal-container">
          <div className="modal-close" onClick={() => window.closeUIModal()}>✕</div>
          <div className="modal-title" id="modal-title">UI Simulation</div>
          <div className="modal-content" id="modal-body"></div>
        </div>
      </div>
    </>
  );
}
