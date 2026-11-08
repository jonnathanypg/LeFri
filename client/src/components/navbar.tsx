import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/hooks/use-auth';
import { useTheme } from '@/components/theme-provider';
import {
  Scale,
  ChevronDown,
  User,
  Settings,
  LogOut,
  Globe,
  BookOpen,
  MessageSquare,
  AlertTriangle,
  FileText,
  Shield,
  Activity,
  LayoutDashboard,
  Menu,
  X,
} from 'lucide-react';
import { useQueryClient, useQuery } from '@tanstack/react-query';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslations } from '@/lib/i18n';

// ─── Label helpers per locale ──────────────────────────────────────────────
function lbl(language: string, es: string, en: string, pt: string): string {
  if (language === 'en') return en;
  if (language === 'pt') return pt;
  return es;
}

export function Navbar() {
  const [location, setLocation] = useLocation();
  const { user, logout, updateUser } = useAuth();
  const { theme, setTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const t = useTranslations(language);
  const queryClient = useQueryClient();
  const [mobileOpen, setMobileOpen] = useState(false);

  // System settings
  const { data: systemSettings } = useQuery<{ internationalizationEnabled: boolean }>({
    queryKey: ['/api/citizen/system/settings'],
    queryFn: async () => {
      const res = await fetch('/api/citizen/system/settings');
      if (!res.ok) return { internationalizationEnabled: false };
      return await res.json();
    },
    staleTime: 60 * 1000,
  });

  // ─── Handlers ──────────────────────────────────────────────────────────────
  const handleLanguageChange = async (newLanguage: string) => {
    try {
      setLanguage(newLanguage as 'en' | 'es' | 'pt');
      await updateUser({ language: newLanguage });
      localStorage.setItem('language', newLanguage);
      document.documentElement.lang = newLanguage;
      queryClient.invalidateQueries({ queryKey: ['translations'] });
    } catch (error) {
      console.error('Error al cambiar el idioma:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      setMobileOpen(false);
      setLocation('/login');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  const handleNavigation = (path: string) => {
    setMobileOpen(false);
    setLocation(path);
  };

  const getInitials = (name: string) =>
    name.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2);

  const getFirstName = (name: string) => name.split(' ')[0];

  // ─── Nav items ─────────────────────────────────────────────────────────────
  interface NavItem {
    href: string;
    label: string;
    icon: React.ReactNode;
    activeColor: string;
    activeBg: string;
    activeBorder: string;
    hoverColor: string;
  }

  const citizenNavItems: NavItem[] = [
    {
      href: '/dashboard',
      label: t.dashboard,
      icon: <LayoutDashboard className="w-3.5 h-3.5" />,
      activeColor: 'text-indigo-300',
      activeBg: 'bg-indigo-600/20',
      activeBorder: 'border border-indigo-500/30',
      hoverColor: 'hover:text-indigo-300 hover:bg-indigo-600/10',
    },
    {
      href: '/consulta',
      label: t.consultation,
      icon: <MessageSquare className="w-3.5 h-3.5" />,
      activeColor: 'text-sky-300',
      activeBg: 'bg-sky-600/20',
      activeBorder: 'border border-sky-500/30',
      hoverColor: 'hover:text-sky-300 hover:bg-sky-600/10',
    },
    {
      href: '/constitucion',
      label: t.navConstitution || 'Constitución',
      icon: <Scale className="w-3.5 h-3.5" />,
      activeColor: 'text-indigo-300',
      activeBg: 'bg-indigo-600/20',
      activeBorder: 'border border-indigo-500/30',
      hoverColor: 'hover:text-indigo-300 hover:bg-indigo-600/10',
    },
    {
      href: '/documentos',
      label: t.navDocuments || 'Documentos',
      icon: <BookOpen className="w-3.5 h-3.5" />,
      activeColor: 'text-emerald-300',
      activeBg: 'bg-emerald-600/20',
      activeBorder: 'border border-emerald-500/30',
      hoverColor: 'hover:text-emerald-300 hover:bg-emerald-600/10',
    },
    {
      href: '/processes',
      label: t.processes,
      icon: <FileText className="w-3.5 h-3.5" />,
      activeColor: 'text-orange-300',
      activeBg: 'bg-orange-600/20',
      activeBorder: 'border border-orange-500/30',
      hoverColor: 'hover:text-orange-300 hover:bg-orange-600/10',
    },
    {
      href: '/emergencia',
      label: t.emergency,
      icon: <AlertTriangle className="w-3.5 h-3.5" />,
      activeColor: 'text-red-300',
      activeBg: 'bg-red-600/20',
      activeBorder: 'border border-red-500/30',
      hoverColor: 'hover:text-red-300 hover:bg-red-600/10',
    },
  ];

  const isActive = (href: string) =>
    href === '/processes'
      ? location === '/processes' || location.startsWith('/processes/')
      : location === href;

  // ─── Language pill component ────────────────────────────────────────────────
  const LanguagePill = ({ compact = false }: { compact?: boolean }) => (
    <div
      className={`flex items-center bg-slate-900 border border-slate-800 rounded-lg p-0.5 ${compact ? 'text-xs' : 'text-sm'}`}
      aria-label="Selector de idioma"
    >
      {(['es', 'en', 'pt'] as const).map((lang, idx) => (
        <button
          key={lang}
          type="button"
          onClick={() => handleLanguageChange(lang)}
          className={`px-2 py-1 rounded transition-all font-semibold ${
            language === lang
              ? 'bg-indigo-600 text-white shadow'
              : 'text-slate-400 hover:text-white'
          }`}
          title={lang === 'es' ? 'Español' : lang === 'en' ? 'English' : 'Português'}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );

  // ─── Desktop nav link ────────────────────────────────────────────────────────
  const DesktopNavLink = ({ item }: { item: NavItem }) => {
    const active = isActive(item.href);
    return (
      <Link
        href={item.href}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150 whitespace-nowrap ${
          active
            ? `${item.activeBg} ${item.activeColor} ${item.activeBorder}`
            : `text-slate-400 ${item.hoverColor}`
        }`}
      >
        {item.icon}
        <span>{item.label}</span>
      </Link>
    );
  };

  // ─── Mobile drawer nav link ──────────────────────────────────────────────────
  const DrawerNavLink = ({ item }: { item: NavItem }) => {
    const active = isActive(item.href);
    return (
      <SheetClose asChild>
        <button
          onClick={() => handleNavigation(item.href)}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all text-left ${
            active
              ? `${item.activeBg} ${item.activeColor} ${item.activeBorder}`
              : `text-slate-400 hover:text-white hover:bg-slate-800`
          }`}
        >
          <span className={`${active ? item.activeColor : 'text-slate-500'}`}>{item.icon}</span>
          <span>{item.label}</span>
          {active && (
            <span className="ml-auto w-1.5 h-1.5 rounded-full bg-current opacity-80" />
          )}
        </button>
      </SheetClose>
    );
  };

  // ─── User avatar dropdown (desktop) ─────────────────────────────────────────
  const UserMenu = () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center gap-2 text-slate-200 hover:text-white hover:bg-slate-800 px-2 py-1.5 h-auto rounded-lg"
        >
          <Avatar className="w-7 h-7">
            <AvatarFallback className="bg-indigo-600 text-white text-xs font-bold">
              {getInitials(user?.name || 'U')}
            </AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium hidden sm:inline-block">
            {getFirstName(user?.name || '')}
          </span>
          <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-52 bg-slate-900 border-slate-800 text-slate-200 shadow-xl shadow-black/40"
        sideOffset={8}
      >
        {/* User Info Header */}
        <div className="px-3 py-2.5 border-b border-slate-800">
          <p className="text-sm font-semibold text-white">{user?.name}</p>
          <p className="text-xs text-slate-400 truncate">{user?.email}</p>
          {user?.role === 'admin' && (
            <Badge className="mt-1 text-[10px] bg-indigo-600/30 text-indigo-300 border-indigo-500/30 hover:bg-indigo-600/30">
              Super Admin
            </Badge>
          )}
        </div>

        {user?.role === 'admin' && (
          <>
            <DropdownMenuItem
              onClick={() => handleNavigation('/admin/dashboard')}
              className="hover:bg-slate-800 focus:bg-slate-800 text-indigo-400 focus:text-indigo-300 font-semibold cursor-pointer mt-1"
            >
              <Shield className="w-4 h-4 mr-2 text-indigo-400" />
              {lbl(language, 'Panel Super Admin', 'Admin Dashboard', 'Painel Admin')}
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-slate-800" />
          </>
        )}

        <DropdownMenuItem
          onClick={() => handleNavigation('/profile')}
          className="hover:bg-slate-800 focus:bg-slate-800 text-slate-200 focus:text-white cursor-pointer"
        >
          <User className="w-4 h-4 mr-2" />
          {t.profile}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleNavigation('/profile')}
          className="hover:bg-slate-800 focus:bg-slate-800 text-slate-200 focus:text-white cursor-pointer"
        >
          <Settings className="w-4 h-4 mr-2" />
          {t.settings}
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-slate-800" />
        <DropdownMenuItem
          onClick={handleLogout}
          className="text-red-400 hover:text-red-300 hover:bg-slate-800 focus:bg-slate-800 focus:text-red-300 cursor-pointer"
        >
          <LogOut className="w-4 h-4 mr-2" />
          {t.logout}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  // ─── Render ──────────────────────────────────────────────────────────────────
  return (
    <header className="sticky top-0 z-50 w-full bg-slate-950/95 border-b border-slate-800/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-2">

          {/* ── LEFT: Logo ─────────────────────────────────────────── */}
          <Link
            href={user ? (user.role === 'admin' ? '/admin/dashboard' : '/dashboard') : '/'}
            className="flex items-center gap-2.5 shrink-0 group"
          >
            <div className="w-8 h-8 rounded-lg bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center text-indigo-400 shadow-sm shadow-indigo-600/20 group-hover:bg-indigo-600/40 transition-colors">
              <Scale className="w-4 h-4" />
            </div>
            <div className="flex flex-col leading-none">
              <div className="flex items-center gap-1.5">
                <span className="text-lg font-black tracking-tight text-white">LeFri</span>
                <span className="hidden sm:inline text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  Legal Friend
                </span>
              </div>
            </div>
          </Link>

          {/* ── CENTER: Desktop Nav (hidden on mobile) ──────────────── */}
          {user && (
            <div className="hidden lg:flex items-center flex-1 justify-center px-4">
              {user.role === 'admin' ? (
                /* Admin desktop nav */
                <nav className="flex items-center gap-1">
                  <Link
                    href="/admin/dashboard"
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      location === '/admin/dashboard'
                        ? 'bg-indigo-600/30 text-indigo-300 border border-indigo-500/40'
                        : 'text-slate-400 hover:text-indigo-300 hover:bg-indigo-600/10'
                    }`}
                  >
                    <Shield className="w-3.5 h-3.5" />
                    <span>{lbl(language, 'Panel Super Admin', 'Admin Panel', 'Painel Admin')}</span>
                  </Link>
                  <div className="h-4 w-px bg-slate-800 mx-1" />
                  <Badge
                    variant="outline"
                    className="text-[10px] text-teal-400 border-teal-500/30 font-mono flex items-center gap-1 py-0.5"
                  >
                    <Activity className="w-3 h-3 text-teal-400" />
                    <span>
                      {lbl(language, 'Gobernanza de Plataforma', 'Platform Governance', 'Governança da Plataforma')}
                    </span>
                  </Badge>
                </nav>
              ) : (
                /* Citizen/Lawyer desktop nav */
                <nav className="flex items-center gap-0.5">
                  {citizenNavItems.map((item) => (
                    <DesktopNavLink key={item.href} item={item} />
                  ))}
                </nav>
              )}
            </div>
          )}

          {/* Spacer for non-logged users on desktop */}
          {!user && <div className="flex-1" />}

          {/* ── RIGHT: Language + User Controls ──────────────────────── */}
          <div className="flex items-center gap-2 shrink-0">

            {/* Language pill: always visible on md+, hidden on mobile (moved to drawer) */}
            <div className="hidden sm:flex">
              <LanguagePill compact />
            </div>

            {/* Hamburger (mobile + tablet, < lg) */}
            {user && (
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Abrir menú"
              >
                <Menu className="w-5 h-5" />
              </button>
            )}

            {/* Desktop user dropdown (lg+) */}
            <div className="hidden lg:flex items-center">
              {user ? (
                <UserMenu />
              ) : (
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setLocation('/login')}
                    className="text-slate-300 hover:text-white hover:bg-slate-800 text-xs h-8"
                  >
                    {lbl(language, 'Ingresar', 'Sign In', 'Entrar')}
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => setLocation('/login')}
                    className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs h-8 px-3 rounded-lg shadow-md shadow-indigo-600/25"
                  >
                    {lbl(language, 'Registrarse', 'Get Started', 'Começar')}
                  </Button>
                </div>
              )}
            </div>

            {/* Mobile: Auth CTA when no user */}
            {!user && (
              <div className="flex lg:hidden items-center gap-1.5">
                <Button
                  size="sm"
                  onClick={() => setLocation('/login')}
                  className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs h-8 px-3 rounded-lg shadow-md shadow-indigo-600/25"
                >
                  {lbl(language, 'Ingresar', 'Sign In', 'Entrar')}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════ */}
      {/* MOBILE / TABLET DRAWER (< lg)                                        */}
      {/* ══════════════════════════════════════════════════════════════════════ */}
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent
          side="left"
          className="w-80 bg-slate-950 border-r border-slate-800 p-0 flex flex-col"
        >
          {/* Drawer Header */}
          <SheetHeader className="px-5 pt-5 pb-4 border-b border-slate-800 shrink-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
                  <Scale className="w-4 h-4" />
                </div>
                <SheetTitle className="text-white font-black text-lg tracking-tight">
                  LeFri
                </SheetTitle>
              </div>
              <SheetClose asChild>
                <button
                  className="w-7 h-7 flex items-center justify-center rounded-lg text-slate-500 hover:text-white hover:bg-slate-800 transition-colors"
                  aria-label="Cerrar menú"
                >
                  <X className="w-4 h-4" />
                </button>
              </SheetClose>
            </div>

            {/* User info inside drawer */}
            {user && (
              <div className="mt-4 flex items-center gap-3 p-3 rounded-xl bg-slate-900 border border-slate-800">
                <Avatar className="w-9 h-9">
                  <AvatarFallback className="bg-indigo-600 text-white text-sm font-bold">
                    {getInitials(user?.name || 'U')}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-white truncate">{user.name}</p>
                  <p className="text-xs text-slate-400 truncate">{user.email}</p>
                </div>
                {user.role === 'admin' && (
                  <Badge className="text-[10px] bg-indigo-600/30 text-indigo-300 border-indigo-500/30 hover:bg-indigo-600/30 shrink-0">
                    Admin
                  </Badge>
                )}
              </div>
            )}
          </SheetHeader>

          {/* Drawer Nav Links */}
          <div className="flex-1 overflow-y-auto py-3 px-3">
            {user ? (
              <>
                {user.role === 'admin' ? (
                  <>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-600 px-3 mb-2">
                      {lbl(language, 'Administración', 'Administration', 'Administração')}
                    </p>
                    <SheetClose asChild>
                      <button
                        onClick={() => handleNavigation('/admin/dashboard')}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all text-left ${
                          location === '/admin/dashboard'
                            ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30'
                            : 'text-slate-400 hover:text-white hover:bg-slate-800'
                        }`}
                      >
                        <Shield className="w-4 h-4 text-indigo-400" />
                        <span>{lbl(language, 'Panel Super Admin', 'Admin Panel', 'Painel Admin')}</span>
                      </button>
                    </SheetClose>
                  </>
                ) : (
                  <>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-600 px-3 mb-2">
                      {lbl(language, 'Navegación', 'Navigation', 'Navegação')}
                    </p>
                    {citizenNavItems.map((item) => (
                      <DrawerNavLink key={item.href} item={item} />
                    ))}
                  </>
                )}
              </>
            ) : (
              <div className="px-3">
                <p className="text-sm text-slate-400 mb-3">
                  {lbl(language, 'Inicia sesión para acceder.', 'Sign in to access your dashboard.', 'Faça login para acessar.')}
                </p>
                <SheetClose asChild>
                  <Button
                    onClick={() => handleNavigation('/login')}
                    className="w-full bg-indigo-600 hover:bg-indigo-500 text-white"
                  >
                    {lbl(language, 'Ingresar', 'Sign In', 'Entrar')}
                  </Button>
                </SheetClose>
              </div>
            )}
          </div>

          {/* Drawer Footer */}
          <div className="px-3 pb-5 pt-3 border-t border-slate-800 shrink-0 space-y-3">
            {/* Language switcher inside drawer */}
            <div className="px-1">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-2 px-2">
                <Globe className="w-3 h-3 inline mr-1.5 mb-0.5" />
                {lbl(language, 'Idioma', 'Language', 'Idioma')}
              </p>
              <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 rounded-lg p-1">
                {(['es', 'en', 'pt'] as const).map((lang) => (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => handleLanguageChange(lang)}
                    className={`flex-1 py-1.5 rounded-md text-xs font-semibold transition-all ${
                      language === lang
                        ? 'bg-indigo-600 text-white shadow'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    {lang === 'es' ? '🇪🇸 ES' : lang === 'en' ? '🇺🇸 EN' : '🇧🇷 PT'}
                  </button>
                ))}
              </div>
            </div>

            {/* User actions */}
            {user && (
              <div className="space-y-1">
                <SheetClose asChild>
                  <button
                    onClick={() => handleNavigation('/profile')}
                    className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-slate-400 hover:text-white hover:bg-slate-800 transition-all text-left"
                  >
                    <User className="w-4 h-4" />
                    {t.profile}
                  </button>
                </SheetClose>
                <SheetClose asChild>
                  <button
                    onClick={() => handleNavigation('/profile')}
                    className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-slate-400 hover:text-white hover:bg-slate-800 transition-all text-left"
                  >
                    <Settings className="w-4 h-4" />
                    {t.settings}
                  </button>
                </SheetClose>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-red-400 hover:text-red-300 hover:bg-red-600/10 transition-all text-left"
                >
                  <LogOut className="w-4 h-4" />
                  {t.logout}
                </button>
              </div>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
