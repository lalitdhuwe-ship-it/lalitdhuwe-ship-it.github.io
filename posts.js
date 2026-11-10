// ============================================================
//  YOUR ARTICLES LIST  (newest first)
//  Two kinds of entry:
//   • LinkedIn article  -> give "url" (opens LinkedIn)
//   • Article on this site -> give "slug" (copy article-template.html to <slug>.html)
//  TODO: replace each LinkedIn "url" with the article's own link
//        (open the article on LinkedIn -> copy the address bar).
// ============================================================
const LI_ARTICLES = "https://www.linkedin.com/in/lalit-dhuwe-98b58410/recent-activity/articles/";

const POSTS = [
  { title: "AI-assisted governance for Power Platform: what the Power Platform Admin plugin in Copilot Cowork changes",
    date: "2026-11-06", newsletter: "Power Platform Admin Pulse", url: LI_ARTICLES,
    summary: "What the plugin does and doesn't do, a four-step path from investigation to automation, and the guardrails to put around it.",
    tags: ["Governance", "Copilot"] },
  { title: "From Power Platform Admin to Agentic Governance",
    date: "2026-10-10", newsletter: "Power Platform Admin Pulse", url: LI_ARTICLES,
    summary: "Agent lifecycle, identity, knowledge governance, AI risk zones and an Agentic CoE: governing digital actors, not just apps.",
    tags: ["Agentic AI", "Governance"] },
  { title: "Who Owns a Power Platform Environment?",
    date: "2026-10-08", newsletter: "Power Platform Admin Pulse", url: LI_ARTICLES,
    summary: "Separating accountability from access so ownership survives role changes and people leaving.",
    tags: ["Governance", "Dataverse"] },
  { title: "Securing Power Platform with Microsoft Global Secure Access",
    date: "2026-10-05", newsletter: "Power Platform Admin Pulse", url: LI_ARTICLES,
    summary: "How an identity-aware network layer complements a Zero Trust architecture for Power Platform.",
    tags: ["Security", "Entra"] },
  { title: "Moving Apps Out of the Default Environment: A Major Step Forward for Power Platform Governance",
    date: "2026-10-02", newsletter: "Power Platform Admin Pulse", url: LI_ARTICLES,
    summary: "Helping successful citizen-developed apps mature into governed enterprise assets in Managed Environments.",
    tags: ["Managed Environments", "CoE"] },
  { title: "Managed Environments Licensing Enforcement: Why February 2027 Matters Now",
    date: "2026-09-30", newsletter: "Power Platform Admin Pulse", url: LI_ARTICLES,
    summary: "What changes, who is affected, and the remediation steps to start now.",
    tags: ["Licensing"] },
  { title: "License Optimization & License Reclamation: From Assignment to Continuous Rightsizing",
    date: "2026-09-28", newsletter: "Power Platform Admin Pulse", url: LI_ARTICLES,
    summary: "Treating Power Platform licensing as an ongoing governance and FinOps discipline.",
    tags: ["Licensing", "FinOps"] },
  { title: "Agentic AI: The Rise of Autonomous AI Agents That Think, Plan, and Act",
    date: "2025-06-01", newsletter: "Featured", url: LI_ARTICLES,
    summary: "What agentic AI really means, real-world applications, and an enterprise case study with Power Platform and GPT-4.",
    tags: ["Agentic AI"] }
];

function renderPosts(targetId, limit, prefix) {
  var el = document.getElementById(targetId);
  if (!el) return;
  var list = limit ? POSTS.slice(0, limit) : POSTS;
  el.innerHTML = list.map(function (p) {
    var href = p.url ? p.url : prefix + p.slug + '.html';
    var ext = p.url ? ' target="_blank" rel="noopener"' : '';
    var where = p.url ? p.newsletter + ' &middot; on LinkedIn &#8599;' : 'On this site';
    var d = new Date(p.date).toLocaleDateString('en-IN', {day:'numeric', month:'short', year:'numeric'});
    var tags = p.tags.map(function (t) { return '<span class="tag">' + t + '</span>'; }).join('');
    return '<a class="card post-card" href="' + href + '"' + ext + '>' +
      '<div class="meta">' + d + ' &middot; ' + where + '</div>' +
      '<h3>' + p.title + '</h3><p>' + p.summary + '</p>' +
      '<div class="tags">' + tags + '</div></a>';
  }).join('');
}
