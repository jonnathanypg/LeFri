import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { 
  Users, Briefcase, Phone, MessageSquare, 
  Send, Bot, CheckCircle, Clock, ShieldAlert,
  Settings, BarChart3, RefreshCw, Key, Globe,
  HeartHandshake, BookOpen, AlertTriangle, Activity,
  MapPin, Check, X, Shield, ExternalLink, Cpu, Zap
} from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { toast } from '@/hooks/use-toast';

export default function AdminDashboard() {
  const queryClient = useQueryClient();
  const [telegramToken, setTelegramToken] = useState('');
  const [newFirmName, setNewFirmName] = useState('');
  const [newFirmSpecialty, setNewFirmSpecialty] = useState('general');

  // Fetch users
  const { data: users, isLoading: isUsersLoading } = useQuery({
    queryKey: ['/api/admin/users'],
    queryFn: async () => {
      const response = await fetch('/api/admin/users');
      if (!response.ok) throw new Error("Failed to load users");
      return await response.json();
    }
  });

  // Fetch firms
  const { data: firms, isLoading: isFirmsLoading } = useQuery({
    queryKey: ['/api/admin/firms'],
    queryFn: async () => {
      const response = await fetch('/api/admin/firms');
      if (!response.ok) throw new Error("Failed to load law firms");
      return await response.json();
    }
  });

  // Fetch activity analytics (Macro & Micro)
  const { data: activityData, isLoading: isActivityLoading } = useQuery({
    queryKey: ['/api/admin/analytics/activity'],
    queryFn: async () => {
      const response = await fetch('/api/admin/analytics/activity');
      if (!response.ok) throw new Error("Failed to load activity analytics");
      return await response.json();
    },
    refetchInterval: 30000 // Refrescar cada 30 segundos
  });

  // Fetch collaboration & support proposals
  const { data: collaborations, isLoading: isCollabLoading } = useQuery({
    queryKey: ['/api/admin/collaborations'],
    queryFn: async () => {
      const response = await fetch('/api/admin/collaborations');
      if (!response.ok) throw new Error("Failed to load collaboration proposals");
      return await response.json();
    }
  });

  // Mutación para actualizar estado de propuesta
  const updateProposalStatusMutation = useMutation({
    mutationFn: async ({ id, status }: { id: string; status: string }) => {
      const response = await fetch(`/api/admin/collaborations/${id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
      });
      if (!response.ok) throw new Error("Error al actualizar estado");
      return await response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/collaborations'] });
      toast({ title: "Estado actualizado", description: "La propuesta ha sido actualizada con éxito." });
    },
    onError: (err: any) => {
      toast({ title: "Error", description: err.message, variant: "destructive" });
    }
  });

  // Mutación para actualizar rol de usuario
  const updateUserRoleMutation = useMutation({
    mutationFn: async ({ userId, role, lawFirmId }: { userId: string; role: string; lawFirmId?: string }) => {
      const response = await fetch(`/api/admin/users/${userId}/role`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ role, lawFirmId })
      });
      if (!response.ok) throw new Error("Failed to update user role");
      return await response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/users'] });
      queryClient.invalidateQueries({ queryKey: ['/api/admin/config'] });
      toast({ title: "Usuario actualizado", description: "El rol y la firma del usuario se han guardado con éxito." });
    },
    onError: (err: any) => {
      toast({ title: "Error", description: err.message, variant: "destructive" });
    }
  });

  // Mutación para actualizar suscripción de bufete
  const updateFirmSubscriptionMutation = useMutation({
    mutationFn: async ({ firmId, subscriptionPlan, proBonoLimit }: { firmId: string; subscriptionPlan: string; proBonoLimit?: number }) => {
      const response = await fetch(`/api/admin/firms/${firmId}/subscription`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subscriptionPlan, proBonoLimit })
      });
      if (!response.ok) throw new Error("Failed to update subscription");
      return await response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/firms'] });
      toast({ title: "Suscripción actualizada", description: "El plan de la firma ha sido actualizado." });
    },
    onError: (err: any) => {
      toast({ title: "Error", description: err.message, variant: "destructive" });
    }
  });

  // Mutación para crear bufete
  const createFirmMutation = useMutation({
    mutationFn: async ({ name, specialty }: { name: string; specialty: string }) => {
      const response = await fetch(`/api/admin/firms`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, specialty })
      });
      if (!response.ok) throw new Error("Failed to create firm");
      return await response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/firms'] });
      toast({ title: "Firma creada", description: "La nueva firma se ha registrado con éxito." });
      setNewFirmName('');
      setNewFirmSpecialty('general');
    },
    onError: (err: any) => {
      toast({ title: "Error", description: err.message, variant: "destructive" });
    }
  });
  
  // Fetch admin configs and stats
  const { data: configData, isLoading, refetch } = useQuery({
    queryKey: ['/api/admin/config'],
    queryFn: async () => {
      const response = await fetch('/api/admin/config');
      if (!response.ok) throw new Error("Failed to load admin config");
      const data = await response.json();
      if (data && data.telegramToken) {
        setTelegramToken(data.telegramToken);
      }
      return data;
    }
  });

  // Mutación para guardar Telegram Token
  const saveTelegramMutation = useMutation({
    mutationFn: async (token: string) => {
      const response = await fetch('/api/admin/config', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ telegramToken: token })
      });
      if (!response.ok) throw new Error("Failed to save Telegram token");
      return await response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/config'] });
      toast({ title: "Configuración guardada", description: "El token de Telegram se ha guardado y configurado." });
    },
    onError: (err: any) => {
      toast({ title: "Error", description: err.message, variant: "destructive" });
    }
  });

  // Mutación para activar/desactivar internacionalización
  const updateI18nMutation = useMutation({
    mutationFn: async (enabled: boolean) => {
      const response = await fetch('/api/admin/config', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ internationalizationEnabled: enabled })
      });
      if (!response.ok) throw new Error("Error al actualizar configuración");
      return await response.json();
    },
    onSuccess: (_, enabled) => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/config'] });
      queryClient.invalidateQueries({ queryKey: ['/api/citizen/system/settings'] });
      toast({
        title: enabled ? "Modo Internacionalización Activado" : "Modo Internacionalización Desactivado",
        description: enabled 
          ? "Se han habilitado todos los idiomas (ES, EN, PT) y constituciones internacionales." 
          : "La plataforma ahora está limitada exclusivamente a Ecuador (EC) y Español (ES)."
      });
    },
    onError: (err: any) => {
      toast({ title: "Error", description: err.message, variant: "destructive" });
    }
  });

  // Mutación para desconectar WhatsApp
  const disconnectMutation = useMutation({
    mutationFn: async () => {
      const response = await fetch('/api/admin/whatsapp/disconnect', {
        method: 'POST'
      });
      if (!response.ok) throw new Error("Failed to disconnect");
      return await response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/config'] });
      toast({ title: "WhatsApp desconectado", description: "La sesión del WhatsApp Central ha sido cerrada." });
    },
    onError: (err: any) => {
      toast({ title: "Error", description: err.message, variant: "destructive" });
    }
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      <Navbar />

      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Welcome Header Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950/70 to-slate-900 border border-indigo-500/25 rounded-2xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Shield className="w-4 h-4" />
              <span>Super Administrador • Gobernanza & Telemetría</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Panel de Control Central LeFri
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-2xl">
              Monitoreo cívico a nivel macro y micro, trazabilidad de artículos constitucionales consultados, gestión de alianzas y canales automatizados B2C.
            </p>
          </div>
          <div className="flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/30 rounded-xl px-3.5 py-2 text-xs">
            <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse" />
            <span className="font-semibold text-emerald-300">Gobernanza Activa</span>
          </div>
        </div>

        {isLoading ? (
          <div className="p-12 text-center text-slate-400 flex items-center justify-center space-x-2">
            <RefreshCw className="w-6 h-6 animate-spin text-indigo-500" />
            <span>Cargando configuraciones y métricas del sistema...</span>
          </div>
        ) : configData && (
          <>
            {/* Top Metrics Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
              <Card className="bg-slate-900/70 border-slate-800 text-slate-100 shadow">
                <CardContent className="p-4 sm:p-5 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium text-slate-400">Usuarios Registrados</p>
                    <p className="text-2xl sm:text-3xl font-bold mt-1 text-indigo-400 font-mono">{configData.stats?.totalUsers ?? 0}</p>
                    <p className="text-[10px] text-slate-400 mt-1">
                      {configData.stats?.totalCitizens ?? 0} ciudadanos | {configData.stats?.totalLawyers ?? 0} abogados
                    </p>
                  </div>
                  <div className="w-10 h-10 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 rounded-xl flex items-center justify-center">
                    <Users className="w-5 h-5" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/70 border-slate-800 text-slate-100 shadow">
                <CardContent className="p-4 sm:p-5 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium text-slate-400">Consultas & Triajes</p>
                    <p className="text-2xl sm:text-3xl font-bold mt-1 text-teal-400 font-mono">
                      {activityData?.summary?.totalConsultations ?? configData.stats?.totalConversations ?? 0}
                    </p>
                    <p className="text-[10px] text-slate-400 mt-1">Total acumulado en el sistema</p>
                  </div>
                  <div className="w-10 h-10 bg-teal-500/10 border border-teal-500/20 text-teal-400 rounded-xl flex items-center justify-center">
                    <Activity className="w-5 h-5" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/70 border-slate-800 text-slate-100 shadow">
                <CardContent className="p-4 sm:p-5 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium text-slate-400">Alertas de Urgencia</p>
                    <p className="text-2xl sm:text-3xl font-bold mt-1 text-rose-400 font-mono">
                      {activityData?.summary?.totalAlerts ?? 0}
                    </p>
                    <p className="text-[10px] text-slate-400 mt-1">Incidentes de vulneración/riesgo</p>
                  </div>
                  <div className="w-10 h-10 bg-rose-500/10 border border-rose-500/20 text-rose-400 rounded-xl flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/70 border-slate-800 text-slate-100 shadow">
                <CardContent className="p-4 sm:p-5 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium text-slate-400">Tokens IA Consumidos</p>
                    <p className="text-2xl sm:text-3xl font-bold mt-1 text-purple-400 font-mono">
                      {activityData?.summary?.ai?.totalTokens ? activityData.summary.ai.totalTokens.toLocaleString() : '0'}
                    </p>
                    <p className="text-[10px] text-slate-400 mt-1">
                      Costo est: <span className="text-emerald-400 font-mono">${(activityData?.summary?.ai?.estimatedCostUsd || 0).toFixed(4)} USD</span>
                    </p>
                  </div>
                  <div className="w-10 h-10 bg-purple-500/10 border border-purple-500/20 text-purple-400 rounded-xl flex items-center justify-center">
                    <Cpu className="w-5 h-5" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/70 border-slate-800 text-slate-100 shadow col-span-2 lg:col-span-1">
                <CardContent className="p-4 sm:p-5 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium text-slate-400">Alianzas & Apoyo</p>
                    <p className="text-2xl sm:text-3xl font-bold mt-1 text-amber-400 font-mono">
                      {collaborations?.length ?? 0}
                    </p>
                    <p className="text-[10px] text-slate-400 mt-1">Propuestas recibidas</p>
                  </div>
                  <div className="w-10 h-10 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-xl flex items-center justify-center">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Tabs Interface */}
            <Tabs defaultValue="activity" className="w-full">
              <TabsList className="bg-slate-900 border border-slate-800 p-1 rounded-xl w-full md:w-auto grid grid-cols-2 md:grid-cols-7 gap-1 mb-6 text-xs">
                <TabsTrigger value="activity" className="rounded-lg data-[state=active]:bg-indigo-600 data-[state=active]:text-white">
                  Métricas de Actividad
                </TabsTrigger>
                <TabsTrigger value="ai_tokens" className="rounded-lg data-[state=active]:bg-indigo-600 data-[state=active]:text-white flex items-center justify-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-purple-400" />
                  <span>Consumo IA & Tokens</span>
                </TabsTrigger>
                <TabsTrigger value="collaborations" className="rounded-lg data-[state=active]:bg-indigo-600 data-[state=active]:text-white">
                  Alianzas ({collaborations?.length || 0})
                </TabsTrigger>
                <TabsTrigger value="channels" className="rounded-lg data-[state=active]:bg-indigo-600 data-[state=active]:text-white">
                  Canales B2C
                </TabsTrigger>
                <TabsTrigger value="users" className="rounded-lg data-[state=active]:bg-indigo-600 data-[state=active]:text-white">
                  Usuarios & Roles
                </TabsTrigger>
                <TabsTrigger value="firms" className="rounded-lg data-[state=active]:bg-indigo-600 data-[state=active]:text-white">
                  Bufetes (SaaS)
                </TabsTrigger>
                <TabsTrigger value="settings" className="rounded-lg data-[state=active]:bg-indigo-600 data-[state=active]:text-white">
                  Expansión & Ajustes
                </TabsTrigger>
              </TabsList>

              {/* ─── TAB 1: ACTIVIDAD MACRO & MICRO ───────────────────────────── */}
              <TabsContent value="activity" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  
                  {/* Artículos más consultados */}
                  <Card className="lg:col-span-2 bg-slate-900 border-slate-800 text-slate-100">
                    <CardHeader className="pb-3 border-b border-slate-800">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <BookOpen className="w-4 h-4 text-teal-400" />
                          <CardTitle className="text-base text-white">Artículos Constitucionales más Consultados</CardTitle>
                        </div>
                        <Badge variant="outline" className="text-teal-400 border-teal-500/30 text-[10px]">
                          Trazabilidad de Normas
                        </Badge>
                      </div>
                      <CardDescription className="text-slate-400 text-xs">
                        Mapeo de temas y artículos que la ciudadanía está necesitando entender con mayor urgencia (respetando la privacidad individual).
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      {isActivityLoading ? (
                        <div className="p-8 text-center text-slate-500 text-xs">Cargando métricas de artículos...</div>
                      ) : activityData?.topArticles && activityData.topArticles.length > 0 ? (
                        <Table>
                          <TableHeader className="bg-slate-950/60">
                            <TableRow className="border-slate-800 hover:bg-transparent">
                              <TableHead className="text-slate-400 text-xs">Artículo / Disposición</TableHead>
                              <TableHead className="text-slate-400 text-xs">Eje Temático</TableHead>
                              <TableHead className="text-slate-400 text-xs text-center">Consultas</TableHead>
                              <TableHead className="text-slate-400 text-xs text-center">Explicaciones Generadas</TableHead>
                              <TableHead className="text-slate-400 text-xs text-right">Última Consulta</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {activityData.topArticles.map((art: any) => (
                              <TableRow key={art.id} className="border-slate-800/60 hover:bg-slate-800/40">
                                <TableCell className="font-semibold text-slate-200 text-xs">
                                  {art.articleTitle}
                                </TableCell>
                                <TableCell className="text-xs">
                                  <span className="capitalize px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[11px] font-mono">
                                    {art.topic || 'General'}
                                  </span>
                                </TableCell>
                                <TableCell className="text-xs text-center font-bold text-teal-400 font-mono">
                                  {art.consultationCount}
                                </TableCell>
                                <TableCell className="text-xs text-center font-mono text-indigo-300">
                                  {art.explanationCount}
                                </TableCell>
                                <TableCell className="text-xs text-right text-slate-400">
                                  {new Date(art.lastConsultedAt).toLocaleDateString()}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      ) : (
                        <div className="p-8 text-center text-slate-400 text-xs">
                          Aún no hay métricas de artículos registradas. Se irán poblando conforme los usuarios exploren la Constitución.
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  {/* Distribución por Temáticas */}
                  <Card className="bg-slate-900 border-slate-800 text-slate-100">
                    <CardHeader className="pb-3 border-b border-slate-800">
                      <div className="flex items-center space-x-2">
                        <BarChart3 className="w-4 h-4 text-indigo-400" />
                        <CardTitle className="text-base text-white">Ejes de Mayor Demanda</CardTitle>
                      </div>
                      <CardDescription className="text-slate-400 text-xs">
                        Distribución de necesidades ciudadanas
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 space-y-4">
                      {activityData?.topicBreakdown && Object.keys(activityData.topicBreakdown).length > 0 ? (
                        Object.entries(activityData.topicBreakdown).map(([topic, count]: any) => (
                          <div key={topic} className="space-y-1.5">
                            <div className="flex justify-between text-xs">
                              <span className="capitalize text-slate-300 font-medium">{topic}</span>
                              <span className="text-indigo-400 font-bold font-mono">{count} consultas</span>
                            </div>
                            <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                              <div 
                                className="bg-indigo-500 h-full rounded-full"
                                style={{ width: `${Math.min(100, Math.max(10, (count / (activityData.summary?.totalConsultations || 1)) * 100))}%` }}
                              />
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="p-6 text-center text-slate-500 text-xs">
                          Métricas temáticas en proceso de acumulación.
                        </div>
                      )}

                      <div className="pt-4 border-t border-slate-800 space-y-3">
                        <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">Recurrencia de Usuarios</h4>
                        <div className="space-y-2">
                          {activityData?.consultationsByUser?.slice(0, 4).map((item: any, idx: number) => (
                            <div key={idx} className="flex items-center justify-between text-xs p-2 rounded bg-slate-950/60 border border-slate-800/80">
                              <span className="text-slate-400 font-mono text-[11px]">Usuario Anónimo #{idx + 1}</span>
                              <Badge className="bg-indigo-600/30 text-indigo-300 border-indigo-500/30 text-[10px]">
                                {item._count.id} consultas realizadas
                              </Badge>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Mapeo de Alertas de Urgencia & Vulneración */}
                <Card className="bg-slate-900 border-slate-800 text-slate-100">
                  <CardHeader className="pb-3 border-b border-slate-800">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-rose-400" />
                        <CardTitle className="text-base text-white">Mapeo de Alertas de Emergencia y Vulneraciones</CardTitle>
                      </div>
                      <Badge className="bg-rose-500/20 text-rose-300 border-rose-500/30 text-[10px]">
                        Geolocalización Ciudadana
                      </Badge>
                    </div>
                    <CardDescription className="text-slate-400 text-xs">
                      Historial de solicitudes de auxilio o activación de emergencia en tiempo real.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    {activityData?.emergencyAlerts && activityData.emergencyAlerts.length > 0 ? (
                      <Table>
                        <TableHeader className="bg-slate-950/60">
                          <TableRow className="border-slate-800 hover:bg-transparent">
                            <TableHead className="text-slate-400 text-xs">ID Alerta</TableHead>
                            <TableHead className="text-slate-400 text-xs">Estado</TableHead>
                            <TableHead className="text-slate-400 text-xs">Ubicación / Dirección Cifrada</TableHead>
                            <TableHead className="text-slate-400 text-xs text-right">Fecha y Hora</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {activityData.emergencyAlerts.map((alert: any) => (
                            <TableRow key={alert.id} className="border-slate-800/60 hover:bg-slate-800/40">
                              <TableCell className="font-mono text-xs text-slate-300">
                                {alert.id.substring(0, 8)}...
                              </TableCell>
                              <TableCell className="text-xs">
                                <Badge className={alert.status === 'sent' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-rose-500/20 text-rose-300'}>
                                  {alert.status}
                                </Badge>
                              </TableCell>
                              <TableCell className="text-xs text-slate-300">
                                {alert.address ? alert.address.substring(0, 60) : 'Ubicación GPS protegida'}
                              </TableCell>
                              <TableCell className="text-xs text-right text-slate-400">
                                {new Date(alert.createdAt).toLocaleString()}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    ) : (
                      <div className="p-8 text-center text-slate-500 text-xs">
                        No hay alertas de emergencia registradas recientemente.
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* ─── TAB: CONSUMO DE IA & TELEMETRÍA DE TOKENS ────────────────── */}
              <TabsContent value="ai_tokens" className="space-y-6">
                {/* Resumen Superior de IA */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Card className="bg-slate-900 border-slate-800 text-slate-100">
                    <CardContent className="p-4 flex items-center justify-between">
                      <div>
                        <p className="text-xs text-slate-400 font-medium">Llamadas a Modelos IA</p>
                        <p className="text-2xl font-bold font-mono text-purple-400 mt-1">
                          {activityData?.summary?.ai?.totalCalls || 0}
                        </p>
                        <p className="text-[10px] text-slate-400 mt-0.5">Invocaciones registradas</p>
                      </div>
                      <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center">
                        <Zap className="w-4 h-4" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-900 border-slate-800 text-slate-100">
                    <CardContent className="p-4 flex items-center justify-between">
                      <div>
                        <p className="text-xs text-slate-400 font-medium">Tokens Totales</p>
                        <p className="text-2xl font-bold font-mono text-indigo-400 mt-1">
                          {(activityData?.summary?.ai?.totalTokens || 0).toLocaleString()}
                        </p>
                        <p className="text-[10px] text-slate-400 mt-0.5">Prompt + Completion</p>
                      </div>
                      <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center">
                        <Cpu className="w-4 h-4" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-900 border-slate-800 text-slate-100">
                    <CardContent className="p-4 flex items-center justify-between">
                      <div>
                        <p className="text-xs text-slate-400 font-medium">Prompt / Entrada</p>
                        <p className="text-2xl font-bold font-mono text-teal-400 mt-1">
                          {(activityData?.summary?.ai?.promptTokens || 0).toLocaleString()}
                        </p>
                        <p className="text-[10px] text-slate-400 mt-0.5">
                          Generados: {(activityData?.summary?.ai?.completionTokens || 0).toLocaleString()}
                        </p>
                      </div>
                      <div className="w-9 h-9 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400 flex items-center justify-center">
                        <Activity className="w-4 h-4" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-900 border-slate-800 text-slate-100">
                    <CardContent className="p-4 flex items-center justify-between">
                      <div>
                        <p className="text-xs text-slate-400 font-medium">Costo Estimado Global</p>
                        <p className="text-2xl font-bold font-mono text-emerald-400 mt-1">
                          ${(activityData?.summary?.ai?.estimatedCostUsd || 0).toFixed(4)} <span className="text-xs text-slate-400">USD</span>
                        </p>
                        <p className="text-[10px] text-slate-400 mt-0.5">Tarifa estándar de inferencia</p>
                      </div>
                      <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                        <span className="text-base font-bold font-mono">$</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Desglose por Modelo */}
                  <Card className="bg-slate-900 border-slate-800 text-slate-100">
                    <CardHeader className="pb-3 border-b border-slate-800">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Cpu className="w-4 h-4 text-purple-400" />
                          <CardTitle className="text-base text-white">Consumo por Modelo & Proveedor</CardTitle>
                        </div>
                        <Badge variant="outline" className="border-purple-500/30 text-purple-400 text-[10px]">
                          Inferencia
                        </Badge>
                      </div>
                      <CardDescription className="text-slate-400 text-xs">
                        Desglose de tokens utilizados y costo según el motor neuronal.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      {activityData?.aiUsage?.byModel && activityData.aiUsage.byModel.length > 0 ? (
                        <Table>
                          <TableHeader className="bg-slate-950/60">
                            <TableRow className="border-slate-800 hover:bg-transparent">
                              <TableHead className="text-slate-400 text-xs">Modelo</TableHead>
                              <TableHead className="text-slate-400 text-xs">Proveedor</TableHead>
                              <TableHead className="text-slate-400 text-xs text-center">Peticiones</TableHead>
                              <TableHead className="text-slate-400 text-xs text-right">Tokens Totales</TableHead>
                              <TableHead className="text-slate-400 text-xs text-right">Costo Est.</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {activityData.aiUsage.byModel.map((item: any, idx: number) => (
                              <TableRow key={idx} className="border-slate-800/60 hover:bg-slate-800/40">
                                <TableCell className="font-mono text-xs text-purple-300 font-semibold">
                                  {item.model}
                                </TableCell>
                                <TableCell className="text-xs">
                                  <Badge className="bg-slate-800 text-slate-300 border-slate-700 text-[10px] uppercase font-mono">
                                    {item.provider}
                                  </Badge>
                                </TableCell>
                                <TableCell className="text-xs text-center font-mono text-slate-300">
                                  {item._count?.id || 1}
                                </TableCell>
                                <TableCell className="text-xs text-right font-mono font-bold text-slate-200">
                                  {(item._sum?.totalTokens || 0).toLocaleString()}
                                </TableCell>
                                <TableCell className="text-xs text-right font-mono text-emerald-400">
                                  ${(item._sum?.estimatedCostUsd || 0).toFixed(4)}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      ) : (
                        <div className="p-8 text-center text-slate-500 text-xs">
                          No hay registros de inferencia acumulados por modelo aún.
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  {/* Desglose por Endpoint / Funcionalidad */}
                  <Card className="bg-slate-900 border-slate-800 text-slate-100">
                    <CardHeader className="pb-3 border-b border-slate-800">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Activity className="w-4 h-4 text-teal-400" />
                          <CardTitle className="text-base text-white">Consumo por Flujo de Negocio</CardTitle>
                        </div>
                        <Badge variant="outline" className="border-teal-500/30 text-teal-400 text-[10px]">
                          Endpoints
                        </Badge>
                      </div>
                      <CardDescription className="text-slate-400 text-xs">
                        Distribución de tokens según consulta ciudadana, explicación constitucional o redacción.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      {activityData?.aiUsage?.byEndpoint && activityData.aiUsage.byEndpoint.length > 0 ? (
                        <Table>
                          <TableHeader className="bg-slate-950/60">
                            <TableRow className="border-slate-800 hover:bg-transparent">
                              <TableHead className="text-slate-400 text-xs">Módulo / Endpoint</TableHead>
                              <TableHead className="text-slate-400 text-xs text-center">Operaciones</TableHead>
                              <TableHead className="text-slate-400 text-xs text-right">Tokens Consumidos</TableHead>
                              <TableHead className="text-slate-400 text-xs text-right">Costo Acumulado</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {activityData.aiUsage.byEndpoint.map((item: any, idx: number) => (
                              <TableRow key={idx} className="border-slate-800/60 hover:bg-slate-800/40">
                                <TableCell className="font-mono text-xs text-teal-300 font-semibold">
                                  {item.endpoint === 'consultation' 
                                    ? 'Consulta Legal / Chat' 
                                    : item.endpoint === 'constitution_explain' 
                                    ? 'Explicación Constitucional' 
                                    : item.endpoint === 'documents_generate'
                                    ? 'Generación de Minutas'
                                    : item.endpoint}
                                </TableCell>
                                <TableCell className="text-xs text-center font-mono text-slate-300">
                                  {item._count?.id || 1}
                                </TableCell>
                                <TableCell className="text-xs text-right font-mono font-bold text-slate-200">
                                  {(item._sum?.totalTokens || 0).toLocaleString()}
                                </TableCell>
                                <TableCell className="text-xs text-right font-mono text-emerald-400">
                                  ${(item._sum?.estimatedCostUsd || 0).toFixed(4)}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      ) : (
                        <div className="p-8 text-center text-slate-500 text-xs">
                          No hay telemetría de endpoints acumulada aún.
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>

                {/* Log Reciente de Invocaciones de IA */}
                <Card className="bg-slate-900 border-slate-800 text-slate-100">
                  <CardHeader className="pb-3 border-b border-slate-800">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <BarChart3 className="w-4 h-4 text-indigo-400" />
                        <CardTitle className="text-base text-white">Registro de Invocaciones Recientes de IA</CardTitle>
                      </div>
                      <Badge className="bg-indigo-500/20 text-indigo-300 border-indigo-500/30 text-[10px]">
                        Telemetría en Vivo
                      </Badge>
                    </div>
                    <CardDescription className="text-slate-400 text-xs">
                      Detalle de las últimas operaciones procesadas por los motores de inteligencia artificial.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    {activityData?.aiUsage?.recent && activityData.aiUsage.recent.length > 0 ? (
                      <Table>
                        <TableHeader className="bg-slate-950/60">
                          <TableRow className="border-slate-800 hover:bg-transparent">
                            <TableHead className="text-slate-400 text-xs">ID Operación</TableHead>
                            <TableHead className="text-slate-400 text-xs">Módulo</TableHead>
                            <TableHead className="text-slate-400 text-xs">Modelo</TableHead>
                            <TableHead className="text-slate-400 text-xs text-center">Prompt</TableHead>
                            <TableHead className="text-slate-400 text-xs text-center">Completion</TableHead>
                            <TableHead className="text-slate-400 text-xs text-right">Tokens Totales</TableHead>
                            <TableHead className="text-slate-400 text-xs text-right">Costo USD</TableHead>
                            <TableHead className="text-slate-400 text-xs text-right">Hora</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {activityData.aiUsage.recent.map((op: any) => (
                            <TableRow key={op.id} className="border-slate-800/60 hover:bg-slate-800/40">
                              <TableCell className="font-mono text-xs text-slate-400">
                                {op.id.substring(0, 8)}...
                              </TableCell>
                              <TableCell className="text-xs text-slate-300 font-medium">
                                {op.endpoint === 'consultation' 
                                  ? 'Consulta Legal' 
                                  : op.endpoint === 'constitution_explain' 
                                  ? 'Explicar Norma' 
                                  : op.endpoint === 'documents_generate'
                                  ? 'Generar Documento'
                                  : op.endpoint}
                              </TableCell>
                              <TableCell className="text-xs font-mono text-purple-300">
                                {op.model}
                              </TableCell>
                              <TableCell className="text-xs text-center font-mono text-slate-400">
                                {op.promptTokens}
                              </TableCell>
                              <TableCell className="text-xs text-center font-mono text-slate-400">
                                {op.completionTokens}
                              </TableCell>
                              <TableCell className="text-xs text-right font-mono font-bold text-slate-200">
                                {op.totalTokens}
                              </TableCell>
                              <TableCell className="text-xs text-right font-mono text-emerald-400">
                                ${(op.estimatedCostUsd || 0).toFixed(5)}
                              </TableCell>
                              <TableCell className="text-xs text-right text-slate-400">
                                {new Date(op.createdAt).toLocaleTimeString()}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    ) : (
                      <div className="p-8 text-center text-slate-500 text-xs">
                        No hay llamadas a modelos registradas recientemente.
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* ─── TAB 2: ALIANZAS & APOYO (COLABORADORES) ─────────────────── */}
              <TabsContent value="collaborations" className="space-y-6">
                <Card className="bg-slate-900 border-slate-800 text-slate-100">
                  <CardHeader className="border-b border-slate-800">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <HeartHandshake className="w-5 h-5 text-amber-400" />
                        <CardTitle className="text-lg text-white">Propuestas de Colaboración y Apoyo Recibidas</CardTitle>
                      </div>
                      <Badge variant="outline" className="border-amber-500/30 text-amber-400">
                        {collaborations?.length || 0} Solicitudes
                      </Badge>
                    </div>
                    <CardDescription className="text-slate-400 text-xs">
                      Personas, fundaciones, profesionales y entidades que han completado el formulario de "Quiero Colaborar" o "Apoyar el Proyecto" en la landing.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    {isCollabLoading ? (
                      <div className="p-8 text-center text-slate-500 text-xs">Cargando propuestas...</div>
                    ) : collaborations && collaborations.length > 0 ? (
                      <Table>
                        <TableHeader className="bg-slate-950/60">
                          <TableRow className="border-slate-800 hover:bg-transparent">
                            <TableHead className="text-slate-400 text-xs">Nombre / Entidad</TableHead>
                            <TableHead className="text-slate-400 text-xs">Tipo</TableHead>
                            <TableHead className="text-slate-400 text-xs">Contacto</TableHead>
                            <TableHead className="text-slate-400 text-xs">Área de Interés</TableHead>
                            <TableHead className="text-slate-400 text-xs">Propuesta / Mensaje</TableHead>
                            <TableHead className="text-slate-400 text-xs">Estado</TableHead>
                            <TableHead className="text-slate-400 text-xs text-right">Acciones</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {collaborations.map((collab: any) => (
                            <TableRow key={collab.id} className="border-slate-800/60 hover:bg-slate-800/40">
                              <TableCell className="font-semibold text-slate-200 text-xs">
                                <p>{collab.name}</p>
                                {collab.organization && (
                                  <p className="text-[10px] text-slate-400">{collab.organization}</p>
                                )}
                              </TableCell>
                              <TableCell className="text-xs">
                                <Badge className={collab.type === 'support' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-indigo-500/20 text-indigo-300'}>
                                  {collab.type === 'support' ? 'Apoyo' : 'Colaboración'}
                                </Badge>
                              </TableCell>
                              <TableCell className="text-xs">
                                <p className="text-slate-200">{collab.email}</p>
                                {collab.phone && <p className="text-[10px] text-slate-400 font-mono">{collab.phone}</p>}
                              </TableCell>
                              <TableCell className="text-xs text-slate-300 capitalize font-mono text-[11px]">
                                {collab.areaOfInterest?.replace('_', ' ') || 'General'}
                              </TableCell>
                              <TableCell className="text-xs text-slate-400 max-w-xs truncate" title={collab.message || ''}>
                                {collab.message || 'Sin mensaje adicional'}
                              </TableCell>
                              <TableCell className="text-xs">
                                <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                                  collab.status === 'contacted' ? 'bg-sky-500/20 text-sky-300' :
                                  collab.status === 'accepted' ? 'bg-emerald-500/20 text-emerald-300' :
                                  'bg-amber-500/20 text-amber-300'
                                }`}>
                                  {collab.status}
                                </span>
                              </TableCell>
                              <TableCell className="text-xs text-right">
                                <select
                                  value={collab.status}
                                  onChange={(e) => updateProposalStatusMutation.mutate({ id: collab.id, status: e.target.value })}
                                  className="text-[11px] bg-slate-950 border border-slate-700 text-slate-300 rounded p-1"
                                >
                                  <option value="pending">Pendiente</option>
                                  <option value="contacted">Contactado</option>
                                  <option value="accepted">Aceptado</option>
                                  <option value="archived">Archivado</option>
                                </select>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    ) : (
                      <div className="p-12 text-center text-slate-400 text-xs">
                        No hay propuestas de colaboración o apoyo registradas hasta el momento.
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* ─── TAB 3: CANALES B2C ───────────────────────────────────────── */}
              <TabsContent value="channels">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* WhatsApp B2C Channel */}
                  <Card className="bg-slate-900 border-slate-800 text-slate-100 shadow">
                    <CardHeader className="border-b border-slate-800">
                      <CardTitle className="flex items-center space-x-2 text-white text-base">
                        <Phone className="w-5 h-5 text-emerald-400" />
                        <span>WhatsApp Central B2C</span>
                      </CardTitle>
                      <CardDescription className="text-slate-400 text-xs">
                        Vincula la cuenta oficial de la plataforma de cara al público. Los ciudadanos chatearán con este número.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6 pt-6">
                      {configData?.whatsappStatus === 'connected' ? (
                        <div className="space-y-4">
                          <div className="p-4 bg-emerald-950/30 border border-emerald-500/30 rounded-xl flex items-center space-x-3 text-emerald-300">
                            <CheckCircle className="w-6 h-6 text-emerald-400" />
                            <div>
                              <p className="font-bold text-sm">WhatsApp B2C Conectado</p>
                              <p className="text-xs text-slate-300 mt-0.5">El canal oficial de atención al público está respondiendo consultas activamente.</p>
                            </div>
                          </div>
                          <Button 
                            variant="destructive" 
                            className="w-full text-xs font-semibold text-white"
                            onClick={() => disconnectMutation.mutate()}
                            disabled={disconnectMutation.isPending}
                          >
                            Desconectar WhatsApp Central
                          </Button>
                        </div>
                      ) : configData?.whatsappStatus === 'qr_ready' ? (
                        <div className="flex flex-col items-center justify-center p-6 space-y-4 border border-slate-800 rounded-xl bg-slate-950/60">
                          <p className="text-sm font-semibold text-slate-200">Escanea el código QR central desde tu celular en WhatsApp</p>
                          <div className="p-4 bg-white rounded-xl shadow border">
                            <img 
                              src={`/api/admin/whatsapp/qr?t=${Date.now()}`} 
                              alt="WhatsApp System B2C QR" 
                              className="w-52 h-52 object-contain"
                            />
                          </div>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="text-xs font-semibold border-slate-700 text-slate-200"
                            onClick={() => refetch()}
                          >
                            <RefreshCw className="w-3.5 h-3.5 mr-1" /> Refrescar Código QR
                          </Button>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center justify-center p-8 border border-slate-800 rounded-xl bg-slate-950/60 space-y-4">
                          <Phone className="w-12 h-12 text-slate-600 animate-pulse" />
                          <p className="text-sm font-semibold text-slate-300 text-center">Conexión B2C lista para iniciar vinculación</p>
                          <Button 
                            className="bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white w-full"
                            onClick={() => refetch()}
                          >
                            Generar Código QR de Conexión
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  {/* Telegram Bot B2C Channel */}
                  <Card className="bg-slate-900 border-slate-800 text-slate-100 shadow">
                    <CardHeader className="border-b border-slate-800">
                      <CardTitle className="flex items-center space-x-2 text-white text-base">
                        <Bot className="w-5 h-5 text-indigo-400" />
                        <span>Telegram Bot Central B2C</span>
                      </CardTitle>
                      <CardDescription className="text-slate-400 text-xs">
                        Configura el Bot de Telegram de cara al público general con @BotFather.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 pt-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 block">Token del Bot de Telegram (HTTP API)</label>
                        <div className="flex gap-2">
                          <div className="relative flex-grow">
                            <Key className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                            <Input 
                              placeholder="Ej: 123456789:ABCdefGhIJKlmNoPQRsTUVwxyZ"
                              value={telegramToken}
                              onChange={(e) => setTelegramToken(e.target.value)}
                              className="pl-9 text-xs bg-slate-950 border-slate-700 text-white"
                              type="password"
                            />
                          </div>
                          <Button 
                            onClick={() => saveTelegramMutation.mutate(telegramToken)}
                            disabled={saveTelegramMutation.isPending}
                            className="bg-indigo-600 hover:bg-indigo-500 text-xs text-white font-semibold"
                          >
                            Guardar Token
                          </Button>
                        </div>
                      </div>

                      <div className="p-4 bg-slate-950/70 border border-slate-800 rounded-xl space-y-2">
                        <p className="text-xs font-bold text-slate-300">Instrucciones de configuración del Bot:</p>
                        <ol className="text-[11px] text-slate-400 space-y-1 list-decimal pl-4 leading-relaxed">
                          <li>Escribe a <a href="https://t.me/BotFather" target="_blank" className="text-indigo-400 font-semibold underline">@BotFather</a> en Telegram y ejecuta `/newbot`.</li>
                          <li>Define el nombre y el username de tu bot (terminando en `bot`).</li>
                          <li>Copia el token HTTP API y pégalo arriba.</li>
                          <li>El bot quedará conectado y los ciudadanos podrán interactuar con él.</li>
                        </ol>
                      </div>

                      {configData?.telegramToken ? (
                        <div className="p-3 bg-emerald-950/30 border border-emerald-500/30 rounded-xl flex items-center text-emerald-300 text-xs">
                          <CheckCircle className="w-4 h-4 mr-2 text-emerald-400" />
                          <span>Bot de Telegram activo y respondiendo actualizaciones del sistema.</span>
                        </div>
                      ) : (
                        <div className="p-3 bg-amber-950/30 border border-amber-500/30 rounded-xl flex items-center text-amber-300 text-xs">
                          <ShieldAlert className="w-4 h-4 mr-2 text-amber-400" />
                          <span>El Bot de Telegram no está activo. Configure un Token para habilitarlo.</span>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* ─── TAB 4: USUARIOS & ROLES ──────────────────────────────────── */}
              <TabsContent value="users">
                <Card className="bg-slate-900 border-slate-800 text-slate-100 shadow">
                  <CardHeader className="border-b border-slate-800">
                    <CardTitle className="text-white text-base">Gestión de Usuarios y Aprobaciones</CardTitle>
                    <CardDescription className="text-slate-400 text-xs">
                      Asigna el rol de Abogado o Administrador a los ciudadanos registrados para habilitar sus paneles especializados.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    {isUsersLoading ? (
                      <div className="p-8 text-center text-slate-500 text-xs">Cargando usuarios...</div>
                    ) : users && users.length > 0 ? (
                      <Table>
                        <TableHeader className="bg-slate-950/60">
                          <TableRow className="border-slate-800 hover:bg-transparent">
                            <TableHead className="text-slate-400 text-xs">Nombre</TableHead>
                            <TableHead className="text-slate-400 text-xs">Email</TableHead>
                            <TableHead className="text-slate-400 text-xs">Teléfono / DID</TableHead>
                            <TableHead className="text-slate-400 text-xs">Rol del Sistema</TableHead>
                            <TableHead className="text-slate-400 text-xs">Firma Asignada</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {users.map((userObj: any) => (
                            <TableRow key={userObj._id || userObj.id} className="border-slate-800/60 hover:bg-slate-800/40">
                              <TableCell className="font-semibold text-slate-200 text-xs">{userObj.name}</TableCell>
                              <TableCell className="text-xs text-slate-300">{userObj.email}</TableCell>
                              <TableCell className="text-xs text-slate-400">
                                <p>{userObj.phone || 'Sin teléfono'}</p>
                                {userObj.did && <p className="text-[10px] text-indigo-400 truncate max-w-[150px]">{userObj.did}</p>}
                              </TableCell>
                              <TableCell>
                                <select
                                  value={userObj.role}
                                  onChange={(e) => updateUserRoleMutation.mutate({ 
                                    userId: userObj._id || userObj.id, 
                                    role: e.target.value,
                                    lawFirmId: userObj.lawFirmId
                                  })}
                                  className="text-xs bg-slate-950 border border-slate-700 text-slate-200 rounded p-1.5 font-medium"
                                  disabled={updateUserRoleMutation.isPending}
                                >
                                  <option value="citizen">Ciudadano</option>
                                  <option value="lawyer">Abogado (Pro/B2B)</option>
                                  <option value="admin">Super Administrador</option>
                                </select>
                              </TableCell>
                              <TableCell>
                                {userObj.role === 'lawyer' ? (
                                  <select
                                    value={userObj.lawFirmId || ''}
                                    onChange={(e) => updateUserRoleMutation.mutate({ 
                                      userId: userObj._id || userObj.id, 
                                      role: userObj.role,
                                      lawFirmId: e.target.value || undefined
                                    })}
                                    className="text-xs bg-slate-950 border border-slate-700 text-slate-200 rounded p-1.5"
                                    disabled={updateUserRoleMutation.isPending}
                                  >
                                    <option value="">Sin Bufete Asignado</option>
                                    {firms?.map((f: any) => (
                                      <option key={f._id || f.id} value={f._id || f.id}>{f.name}</option>
                                    ))}
                                  </select>
                                ) : (
                                  <span className="text-[11px] text-slate-500 italic">N/A</span>
                                )}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    ) : (
                      <div className="p-8 text-center text-slate-500 text-xs">No hay usuarios registrados.</div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* ─── TAB 5: BUFETES (SAAS) ────────────────────────────────────── */}
              <TabsContent value="firms" className="space-y-6">
                <Card className="bg-slate-900 border-slate-800 text-slate-100 shadow">
                  <CardHeader className="border-b border-slate-800 flex flex-row items-center justify-between">
                    <div>
                      <CardTitle className="text-white text-base">Bufetes de Abogados (Ecosistema B2B)</CardTitle>
                      <CardDescription className="text-slate-400 text-xs">
                        Administra firmas legaltech, suscriptores profesionales y cuotas pro-bono.
                      </CardDescription>
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="sm" className="bg-indigo-600 hover:bg-indigo-500 text-xs text-white">
                          + Registrar Nueva Firma
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="bg-slate-900 border-slate-800 text-white">
                        <DialogHeader>
                          <DialogTitle>Nueva Firma Legal</DialogTitle>
                          <DialogDescription className="text-slate-400 text-xs">
                            Crea una nueva organización jurídica en el sistema.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4 py-3">
                          <div>
                            <label className="text-xs text-slate-300 font-semibold block mb-1">Nombre del Bufete</label>
                            <Input 
                              value={newFirmName} 
                              onChange={(e) => setNewFirmName(e.target.value)}
                              placeholder="Ej. Morales & Asociados Legal"
                              className="bg-slate-950 border-slate-700 text-white text-xs"
                            />
                          </div>
                          <div>
                            <label className="text-xs text-slate-300 font-semibold block mb-1">Especialidad Principal</label>
                            <select
                              value={newFirmSpecialty}
                              onChange={(e) => setNewFirmSpecialty(e.target.value)}
                              className="w-full text-xs bg-slate-950 border border-slate-700 text-slate-200 rounded-md p-2"
                            >
                              <option value="general">Generalista</option>
                              <option value="laboral">Laboral y Seguridad Social</option>
                              <option value="penal">Penal y Urgencias</option>
                              <option value="familia">Familia y Niñez</option>
                              <option value="civil">Civil y Mercantil</option>
                            </select>
                          </div>
                        </div>
                        <DialogFooter>
                          <Button 
                            onClick={() => createFirmMutation.mutate({ name: newFirmName, specialty: newFirmSpecialty })}
                            disabled={!newFirmName || createFirmMutation.isPending}
                            className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs"
                          >
                            Crear Firma
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </CardHeader>
                  <CardContent className="p-0">
                    {isFirmsLoading ? (
                      <div className="p-8 text-center text-slate-500 text-xs">Cargando firmas...</div>
                    ) : firms && firms.length > 0 ? (
                      <Table>
                        <TableHeader className="bg-slate-950/60">
                          <TableRow className="border-slate-800 hover:bg-transparent">
                            <TableHead className="text-slate-400 text-xs">Nombre</TableHead>
                            <TableHead className="text-slate-400 text-xs">Especialidad</TableHead>
                            <TableHead className="text-slate-400 text-xs">Plan de Suscripción</TableHead>
                            <TableHead className="text-slate-400 text-xs">Límite ProBono</TableHead>
                            <TableHead className="text-slate-400 text-xs">Registrado En</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {firms.map((firm: any) => (
                            <TableRow key={firm._id || firm.id} className="border-slate-800/60 hover:bg-slate-800/40">
                              <TableCell className="font-semibold text-slate-200 text-xs">
                                <p>{firm.name}</p>
                                {firm.whatsAppSessionActive && (
                                  <Badge className="bg-emerald-500/20 text-emerald-300 border-none text-[9px] mt-1">WhatsApp Activo</Badge>
                                )}
                              </TableCell>
                              <TableCell className="capitalize text-xs text-slate-300">{firm.specialty || 'General'}</TableCell>
                              <TableCell>
                                <select
                                  value={firm.subscriptionPlan}
                                  onChange={(e) => updateFirmSubscriptionMutation.mutate({ 
                                    firmId: firm._id || firm.id, 
                                    subscriptionPlan: e.target.value,
                                    proBonoLimit: firm.proBonoLimit
                                  })}
                                  className="text-xs bg-slate-950 border border-slate-700 text-slate-200 rounded p-1.5 font-medium"
                                  disabled={updateFirmSubscriptionMutation.isPending}
                                >
                                  <option value="free">Gratuito (Free)</option>
                                  <option value="pro">Pro (Prueba/Trial)</option>
                                  <option value="enterprise">Corporativo (Enterprise)</option>
                                </select>
                              </TableCell>
                              <TableCell>
                                <input
                                  type="number"
                                  value={firm.proBonoLimit}
                                  onChange={(e) => updateFirmSubscriptionMutation.mutate({
                                    firmId: firm._id || firm.id,
                                    subscriptionPlan: firm.subscriptionPlan,
                                    proBonoLimit: parseInt(e.target.value) || 0
                                  })}
                                  className="w-16 text-xs bg-slate-950 border border-slate-700 text-slate-200 rounded p-1.5 text-center"
                                  disabled={updateFirmSubscriptionMutation.isPending}
                                  min="0"
                                />
                              </TableCell>
                              <TableCell className="text-xs text-slate-400">
                                {new Date(firm.createdAt).toLocaleDateString()}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    ) : (
                      <div className="p-8 text-center text-slate-500 text-xs">No hay bufetes registrados.</div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* ─── TAB 6: CONFIGURACIÓN & EXPANSIÓN GLOBAL ─────────────────── */}
              <TabsContent value="settings" className="space-y-6">
                <Card className="shadow border-slate-800 bg-slate-900 text-slate-100">
                  <CardHeader className="border-b border-slate-800">
                    <div className="flex items-center space-x-2">
                      <Globe className="w-5 h-5 text-indigo-400" />
                      <CardTitle className="text-white text-base">Internacionalización y Expansión Global</CardTitle>
                    </div>
                    <CardDescription className="text-slate-400 text-xs">
                      Controla el alcance geográfico e idiomático de la plataforma LeFri.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6 pt-6">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-xl border border-slate-800 bg-slate-950/60">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-sm text-slate-100">Modo Internacionalización (Multilenguaje y Multipaís)</span>
                          {configData?.internationalizationEnabled ? (
                            <Badge className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px]">
                              Activo: Global (ES / EN / PT)
                            </Badge>
                          ) : (
                            <Badge className="bg-amber-500/20 text-amber-400 border border-amber-500/30 text-[10px]">
                              Inactivo: Exclusivo Ecuador (EC / ES)
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs text-slate-400 max-w-2xl leading-relaxed">
                          {configData?.internationalizationEnabled
                            ? "La plataforma opera a nivel internacional con selector de idiomas (Español, Inglés, Portugués) y consulta constitucional para múltiples jurisdicciones."
                            : "La plataforma está limitada exclusivamente a Ecuador (EC) y en idioma Español (ES)."}
                        </p>
                      </div>

                      <div className="flex items-center space-x-3 flex-shrink-0">
                        <span className="text-xs text-slate-400 font-medium">
                          {configData?.internationalizationEnabled ? "Habilitado" : "Deshabilitado"}
                        </span>
                        <Switch
                          checked={Boolean(configData?.internationalizationEnabled)}
                          disabled={updateI18nMutation.isPending}
                          onCheckedChange={(checked) => updateI18nMutation.mutate(checked)}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                      <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/40 text-xs space-y-2">
                        <div className="font-semibold text-indigo-300 flex items-center gap-1.5">
                          <span>🇪🇨</span> Estado Actual del Ecosistema
                        </div>
                        <ul className="space-y-1 text-slate-400 list-disc pl-4">
                          <li>Jurisdicción Base: <strong>Ecuador (EC)</strong></li>
                          <li>Idioma Predeterminado: <strong>Español (es)</strong></li>
                          <li>Módulos Jurídicos: <strong>Activos para toda la ciudadanía</strong></li>
                        </ul>
                      </div>

                      <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/40 text-xs space-y-2">
                        <div className="font-semibold text-emerald-300 flex items-center gap-1.5">
                          <span>🌐</span> Capacidades con Expansión
                        </div>
                        <ul className="space-y-1 text-slate-400 list-disc pl-4">
                          <li>Selector de Idiomas: <strong>🇪🇸 ES | 🇺🇸 EN | 🇧🇷 PT</strong></li>
                          <li>Acceso a ConstituteProject de 9+ países (incluyendo Brasil)</li>
                          <li>Generación documental multilingüe</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
