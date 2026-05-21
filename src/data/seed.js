export const DEMO_CREDENTIALS = {
  email: 'employee@nexus.com',
  password: 'nexus123',
};

export const CURRENT_USER_ID = 'emp-001';

export const employees = [
  {
    id: 'emp-001',
    name: 'Priya Sharma',
    email: 'employee@nexus.com',
    role: 'Senior Product Manager',
    department: 'Product',
    location: 'Bangalore',
    avatar: 'https://i.pravatar.cc/150?u=emp-001',
    xp: 2840,
    badges: ['innovator', 'team-player', 'mentor'],
    joinedAt: '2021-03-15',
    bio: 'Building products that connect our global workforce.',
  },
  {
    id: 'emp-002',
    name: "James O'Connor",
    email: 'james.oconnor@nexus.com',
    role: 'Engineering Lead',
    department: 'Engineering',
    location: 'Dublin',
    avatar: 'https://i.pravatar.cc/150?u=emp-002',
    xp: 3120,
    badges: ['innovator', 'problem-solver'],
    joinedAt: '2019-08-01',
    bio: 'Full-stack engineer passionate about scalable systems.',
  },
  {
    id: 'emp-003',
    name: 'Maria Santos',
    email: 'maria.santos@nexus.com',
    role: 'HR Business Partner',
    department: 'People & Culture',
    location: 'São Paulo',
    avatar: 'https://i.pravatar.cc/150?u=emp-003',
    xp: 1950,
    badges: ['culture-champion', 'mentor'],
    joinedAt: '2020-01-20',
    bio: 'Championing employee experience across LATAM.',
  },
  {
    id: 'emp-004',
    name: 'David Chen',
    email: 'david.chen@nexus.com',
    role: 'UX Designer',
    department: 'Design',
    location: 'Singapore',
    avatar: 'https://i.pravatar.cc/150?u=emp-004',
    xp: 2210,
    badges: ['innovator', 'customer-hero'],
    joinedAt: '2022-06-10',
    bio: 'Designing intuitive experiences for enterprise users.',
  },
  {
    id: 'emp-005',
    name: 'Aisha Patel',
    email: 'aisha.patel@nexus.com',
    role: 'Data Analyst',
    department: 'Analytics',
    location: 'Mumbai',
    avatar: 'https://i.pravatar.cc/150?u=emp-005',
    xp: 1680,
    badges: ['problem-solver'],
    joinedAt: '2023-02-14',
    bio: 'Turning data into decisions for leadership.',
  },
  {
    id: 'emp-006',
    name: 'Michael Torres',
    email: 'michael.torres@nexus.com',
    role: 'Sales Director',
    department: 'Sales',
    location: 'Austin',
    avatar: 'https://i.pravatar.cc/150?u=emp-006',
    xp: 2540,
    badges: ['customer-hero', 'team-player'],
    joinedAt: '2018-11-05',
    bio: 'Driving enterprise growth across North America.',
  },
  {
    id: 'emp-007',
    name: 'Emily Nguyen',
    email: 'emily.nguyen@nexus.com',
    role: 'Marketing Manager',
    department: 'Marketing',
    location: 'Toronto',
    avatar: 'https://i.pravatar.cc/150?u=emp-007',
    xp: 1890,
    badges: ['culture-champion'],
    joinedAt: '2021-09-01',
    bio: 'Brand storyteller and internal comms advocate.',
  },
  {
    id: 'emp-008',
    name: 'Robert Kim',
    email: 'robert.kim@nexus.com',
    role: 'DevOps Engineer',
    department: 'Engineering',
    location: 'Seoul',
    avatar: 'https://i.pravatar.cc/150?u=emp-008',
    xp: 2760,
    badges: ['problem-solver', 'innovator'],
    joinedAt: '2020-04-22',
    bio: 'Keeping Nexus infrastructure reliable 24/7.',
  },
  {
    id: 'emp-009',
    name: 'Sarah Williams',
    email: 'sarah.williams@nexus.com',
    role: 'Chief of Staff',
    department: 'Executive',
    location: 'New York',
    avatar: 'https://i.pravatar.cc/150?u=emp-009',
    xp: 3400,
    badges: ['mentor', 'team-player', 'culture-champion'],
    joinedAt: '2017-06-01',
    bio: 'Aligning strategy and operations at the executive level.',
  },
  {
    id: 'emp-010',
    name: "Liam O'Brien",
    email: 'liam.obrien@nexus.com',
    role: 'Customer Success Manager',
    department: 'Customer Success',
    location: 'London',
    avatar: 'https://i.pravatar.cc/150?u=emp-010',
    xp: 2100,
    badges: ['customer-hero', 'team-player'],
    joinedAt: '2022-01-17',
    bio: 'Ensuring our clients achieve measurable outcomes.',
  },
];

export const badges = [
  { id: 'innovator', label: 'Innovator', icon: 'Lightbulb', color: '#0EA5E9' },
  { id: 'team-player', label: 'Team Player', icon: 'Users', color: '#10B981' },
  { id: 'mentor', label: 'Mentor', icon: 'GraduationCap', color: '#8B5CF6' },
  { id: 'problem-solver', label: 'Problem Solver', icon: 'Wrench', color: '#F59E0B' },
  { id: 'customer-hero', label: 'Customer Hero', icon: 'Star', color: '#EF4444' },
  { id: 'culture-champion', label: 'Culture Champion', icon: 'Heart', color: '#EC4899' },
];

export const leadershipMessage = {
  author: 'Sarah Williams',
  authorId: 'emp-009',
  title: 'Chief of Staff',
  avatar: 'https://i.pravatar.cc/150?u=emp-009',
  message:
    'Team — Q2 is about connection and clarity. Use NexusConnect to celebrate wins, find colleagues across regions, and stay aligned on what matters. Thank you for making Nexus stronger every day.',
  publishedAt: '2026-05-12',
};

export const announcements = [
  {
    id: 'ann-001',
    title: 'NexusConnect Mobile Launch',
    summary: 'Our new employee app is live. Explore Home, People, and Recognition today.',
    body:
      'We are excited to announce that NexusConnect Mobile is now available for all employees worldwide. The app brings your intranet essentials to your pocket: leadership updates, company announcements, people search, and peer recognition.\n\nDownload tips: Use Expo Go for internal testing or install from the corporate portal when production builds roll out. Your demo login works across all environments.\n\nQuestions? Reach out to the Product team via #nexusconnect-help on Slack.',
    category: 'Company',
    publishedAt: '2026-05-15',
    isPinned: true,
    authorId: 'emp-009',
    authorName: 'Sarah Williams',
    authorAvatar: 'https://i.pravatar.cc/150?u=emp-009',
  },
  {
    id: 'ann-002',
    title: 'Hybrid Work Policy Update',
    summary: 'Updated guidelines for office days effective June 1. Review the FAQ on the intranet.',
    body:
      'Starting June 1, our hybrid work policy has been refreshed to support team collaboration while maintaining flexibility. Most roles are expected in-office Tuesday through Thursday, with Monday and Friday as flex days unless your manager approves otherwise.\n\nPlease review the full FAQ on the intranet under People & Culture → Workplace Policies. Managers will host team sessions next week to answer questions.',
    category: 'HR',
    publishedAt: '2026-05-10',
    isPinned: false,
    authorId: 'emp-003',
    authorName: 'Maria Santos',
    authorAvatar: 'https://i.pravatar.cc/150?u=emp-003',
  },
  {
    id: 'ann-003',
    title: 'Security Awareness Week',
    summary: 'Complete your mandatory phishing simulation by May 25.',
    body:
      'Security Awareness Week runs May 20–24. All employees must complete the updated phishing simulation and pass the 5-minute security refresher module in the learning portal by May 25.\n\nIT will publish daily tips on common threats targeting remote workers. Completion is tracked automatically — no manual sign-off required.',
    category: 'IT',
    publishedAt: '2026-05-08',
    isPinned: false,
    authorId: 'emp-008',
    authorName: 'Robert Kim',
    authorAvatar: 'https://i.pravatar.cc/150?u=emp-008',
  },
  {
    id: 'ann-004',
    title: 'Wellness Stipend Reminder',
    summary: 'Submit Q2 wellness receipts through the benefits portal by May 31.',
    body:
      'A friendly reminder that Q2 wellness stipend claims must be submitted by May 31. Eligible expenses include fitness memberships, mental health apps, ergonomic equipment, and approved wellness programs.\n\nUpload receipts to the benefits portal under My Benefits → Wellness Stipend. Reimbursements are processed within 10 business days.',
    category: 'Benefits',
    publishedAt: '2026-05-05',
    isPinned: false,
    authorId: 'emp-003',
    authorName: 'Maria Santos',
    authorAvatar: 'https://i.pravatar.cc/150?u=emp-003',
  },
  {
    id: 'ann-005',
    title: 'All-Hands: Product Roadmap',
    summary: 'Join CEO + product leadership May 22 at 10:00 AM ET / 7:30 PM IST.',
    body:
      'Join us for the Q2 All-Hands featuring our CEO and product leadership team. We will walk through the 2026 roadmap, mobile intranet milestones, and open Q&A.\n\nWhen: May 22 — 10:00 AM ET / 7:30 PM IST\nWhere: Main auditorium + virtual livestream\nCalendar invites have been sent. Please submit questions in advance using the Slido link in the invite.',
    category: 'Events',
    publishedAt: '2026-05-01',
    isPinned: false,
    authorId: 'emp-009',
    authorName: 'Sarah Williams',
    authorAvatar: 'https://i.pravatar.cc/150?u=emp-009',
  },
];

export const notifications = [
  {
    id: 'notif-001',
    type: 'recognition_received',
    title: 'New recognition from James',
    message: "James O'Connor recognized you with the Innovator badge.",
    createdAt: '2026-05-20T09:30:00Z',
    relatedId: 'rec-001',
  },
  {
    id: 'notif-002',
    type: 'new_announcement',
    title: 'NexusConnect Mobile Launch',
    message: 'A new company announcement has been posted.',
    createdAt: '2026-05-20T08:00:00Z',
    relatedId: 'ann-001',
  },
  {
    id: 'notif-003',
    type: 'event_reminder',
    title: 'Innovation Day in 4 weeks',
    message: 'Nexus Innovation Day 2026 is on June 18. RSVP on the events page.',
    createdAt: '2026-05-20T07:15:00Z',
    relatedId: 'evt-001',
  },
  {
    id: 'notif-004',
    type: 'recognition_received',
    title: 'Team shout-out',
    message: 'Your recognition post to Aisha Patel received 8 likes.',
    createdAt: '2026-05-19T16:20:00Z',
    relatedId: 'rec-005',
  },
  {
    id: 'notif-005',
    type: 'new_announcement',
    title: 'Hybrid Work Policy Update',
    message: 'HR published an update to the hybrid work guidelines.',
    createdAt: '2026-05-18T11:00:00Z',
    relatedId: 'ann-002',
  },
  {
    id: 'notif-006',
    type: 'event_reminder',
    title: 'All-Hands this week',
    message: 'Product Roadmap All-Hands is scheduled for May 22.',
    createdAt: '2026-05-17T09:00:00Z',
    relatedId: 'ann-005',
  },
  {
    id: 'notif-007',
    type: 'new_announcement',
    title: 'Security Awareness Week',
    message: 'Complete your phishing simulation by May 25.',
    createdAt: '2026-05-16T14:30:00Z',
    relatedId: 'ann-003',
  },
  {
    id: 'notif-008',
    type: 'recognition_received',
    title: 'Recognition from Sarah',
    message: 'Sarah Williams sent you a Culture Champion badge last week.',
    createdAt: '2026-05-14T10:00:00Z',
    relatedId: 'rec-006',
  },
];

export const upcomingEvent = {
  id: 'evt-001',
  title: 'Nexus Innovation Day 2026',
  date: '2026-06-18',
  time: '09:00 AM',
  timezone: 'Local',
  location: 'HQ Auditorium + Virtual',
  description: 'Demos, lightning talks, and cross-team collaboration sessions.',
  rsvpCount: 142,
};

export let recognitionPosts = [
  {
    id: 'rec-001',
    fromEmployeeId: 'emp-002',
    toEmployeeId: 'emp-001',
    badgeId: 'innovator',
    message:
      'Priya led the mobile MVP spec with incredible clarity. The whole eng team is aligned because of her work.',
    createdAt: '2026-05-18T10:30:00Z',
    likes: 12,
  },
  {
    id: 'rec-002',
    fromEmployeeId: 'emp-008',
    toEmployeeId: 'emp-004',
    badgeId: 'customer-hero',
    message:
      'David redesigned the onboarding flow based on user research — support tickets dropped 18% in two weeks.',
    createdAt: '2026-05-17T14:00:00Z',
    likes: 9,
  },
  {
    id: 'rec-003',
    fromEmployeeId: 'emp-003',
    toEmployeeId: 'emp-007',
    badgeId: 'culture-champion',
    message:
      'Emily organized our regional culture week and brought three offices together virtually. Huge impact.',
    createdAt: '2026-05-16T09:15:00Z',
    likes: 15,
  },
  {
    id: 'rec-004',
    fromEmployeeId: 'emp-006',
    toEmployeeId: 'emp-010',
    badgeId: 'team-player',
    message:
      'Liam jumped in on the Acme renewal with zero notice and turned a at-risk account into an expansion.',
    createdAt: '2026-05-15T16:45:00Z',
    likes: 11,
  },
  {
    id: 'rec-005',
    fromEmployeeId: 'emp-001',
    toEmployeeId: 'emp-005',
    badgeId: 'problem-solver',
    message:
      'Aisha built the dashboard that finally gave leadership a single source of truth for retention metrics.',
    createdAt: '2026-05-14T11:20:00Z',
    likes: 8,
  },
  {
    id: 'rec-006',
    fromEmployeeId: 'emp-009',
    toEmployeeId: 'emp-002',
    badgeId: 'mentor',
    message:
      'James mentored two new tech leads this quarter. His documentation standards are now team-wide.',
    createdAt: '2026-05-13T08:00:00Z',
    likes: 14,
  },
  {
    id: 'rec-007',
    fromEmployeeId: 'emp-004',
    toEmployeeId: 'emp-008',
    badgeId: 'innovator',
    message:
      'Robert automated our staging deploys — release cycles went from days to hours. Legend.',
    createdAt: '2026-05-12T13:30:00Z',
    likes: 10,
  },
  {
    id: 'rec-008',
    fromEmployeeId: 'emp-010',
    toEmployeeId: 'emp-006',
    badgeId: 'customer-hero',
    message:
      'Michael closed the biggest enterprise deal of the year while keeping the customer success team in the loop.',
    createdAt: '2026-05-11T17:00:00Z',
    likes: 7,
  },
];

export function getEmployeeById(id) {
  return employees.find((e) => e.id === id) || null;
}

export function getAnnouncementById(id) {
  return announcements.find((a) => a.id === id) || null;
}

export function groupNotificationsByPeriod(items) {
  const now = new Date();
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const startOfWeek = new Date(startOfToday);
  startOfWeek.setDate(startOfWeek.getDate() - 7);

  const today = [];
  const thisWeek = [];

  items.forEach((item) => {
    const date = new Date(item.createdAt);
    if (date >= startOfToday) {
      today.push(item);
    } else if (date >= startOfWeek) {
      thisWeek.push(item);
    }
  });

  return { today, thisWeek };
}

export function getBadgeById(id) {
  return badges.find((b) => b.id === id) || null;
}

export function searchEmployees(query, excludeId) {
  const q = query.trim().toLowerCase();
  return employees.filter((e) => {
    if (excludeId && e.id === excludeId) return false;
    if (!q) return true;
    return (
      e.name.toLowerCase().includes(q) ||
      e.role.toLowerCase().includes(q) ||
      e.department.toLowerCase().includes(q)
    );
  });
}

export function getRecognitionsForEmployee(employeeId) {
  return recognitionPosts.filter((p) => p.toEmployeeId === employeeId);
}

export function addRecognitionPost({ fromEmployeeId, toEmployeeId, badgeId, message }) {
  const post = {
    id: `rec-${Date.now()}`,
    fromEmployeeId,
    toEmployeeId,
    badgeId,
    message,
    createdAt: new Date().toISOString(),
    likes: 0,
  };
  recognitionPosts = [post, ...recognitionPosts];

  const recipient = getEmployeeById(toEmployeeId);
  const sender = getEmployeeById(fromEmployeeId);
  if (recipient) recipient.xp += 50;
  if (sender) sender.xp += 10;

  return post;
}

export function getXpLevel(xp) {
  return Math.floor(xp / 500) + 1;
}

export function getXpProgress(xp) {
  const level = getXpLevel(xp);
  const currentLevelXp = (level - 1) * 500;
  const nextLevelXp = level * 500;
  const progress = ((xp - currentLevelXp) / (nextLevelXp - currentLevelXp)) * 100;
  return { level, progress: Math.min(progress, 100) };
}

export function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

export function formatRelativeTime(dateStr) {
  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = now - date;
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return 'Just now';
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;
  return formatDate(dateStr);
}

export function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning';
  if (hour < 17) return 'Good afternoon';
  return 'Good evening';
}
