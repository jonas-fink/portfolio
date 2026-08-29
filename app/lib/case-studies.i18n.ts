import type { Locale } from '../i18n/config';

// Per-slug DE/ES overrides for case-study prose. Any field omitted falls back to
// the English base in case-studies.ts. `sections` is replaced wholesale when
// provided — translate every section, in the same order as the English source.
export type CaseStudyTranslation = {
    title?: string;
    summary?: string;
    sections?: { heading: string; body: string }[];
};

export const caseStudyTranslations: Record<
    string,
    Partial<Record<Exclude<Locale, 'en'>, CaseStudyTranslation>>
> = {
    cms: {
        de: {
            title: 'Klientenmanagement-System für die Soziale Arbeit',
            summary:
                'Dashboards für Fachkräfte und Koordinator:innen in der Sozialen Arbeit: Berichte, ' +
                'Dokumentation, Auslastung, Urlaub/Krankmeldung, Arbeitszeiten und ' +
                'Terminmanagement. Geteilter, RBAC-geschützter Dateispeicher pro Klient:in, ' +
                'Benachrichtigungs- und Einladungssystem für Termine.',
            sections: [
                {
                    heading: 'Situation',
                    body:
                        'In der Sozialpädagogischen Familienhilfe (SPFH) arbeiten Fachkräfte direkt mit ' +
                        'Familien in oft komplexen Lebenslagen. Vor diesem CMS war die Dokumentation von ' +
                        'Terminen, Berichten und Hilfeplänen stark fragmentiert. Arbeitszeiten, Termine ' +
                        'und Fahrtzeiten wurden manuell erfasst, und der Abgleich geleisteter Stunden ' +
                        'gegen das bewilligte Wochenkontingent jeder Familie beruhte auf fehleranfälligen ' +
                        'Excel-Listen. Admins fehlte eine Echtzeit-Übersicht über die tatsächliche ' +
                        'Team-Auslastung, Urlaubsüberschneidungen oder wer gerade im Dienst ist. Sensible, ' +
                        'fallbezogene Dokumente wurden teils lokal oder über unsichere Kanäle geteilt, und ' +
                        'es gab keine strikte, systemseitige Trennung von administrativen Rechten und den ' +
                        'Schreibrechten der Fachkräfte auf Fallakten.',
                },
                {
                    heading: 'Aufgabe',
                    body:
                        'Ziel war eine DSGVO-konforme, performante und intuitive Full-Stack-Plattform, die ' +
                        'administrative Lasten minimiert und Datensicherheit garantiert. Funktional brauchte ' +
                        'es vollwertiges Klientenmanagement inklusive Tandem-Betreuung (zwei Fachkräfte ' +
                        'teilen sich einen Fall), lückenlose, manipulationssichere Zeiterfassung mit ' +
                        'Überstundenberechnung sowie die automatisierte Kontingentauslastung pro Familie ' +
                        'inklusive gerechter Verteilung von Ausfallzeiten. Technisch waren die harten Nüsse ' +
                        'eine sichere Authentifizierung für sensible Fallakten, ein skalierbares ' +
                        'File-Handling ohne Server-Overhead bei großen Dokumenten und durchgängige ' +
                        'Typsicherheit, sodass API-Anfragen zur Laufzeit exakt den Backend-Typen entsprechen ' +
                        'und diese Typen 1:1 im React-Frontend gespiegelt werden.',
                },
                {
                    heading: 'Umsetzung',
                    body:
                        'Die Authentifizierung nutzt stateful JWTs: kurzlebige Access Tokens (15 Min, im ' +
                        'Memory des Frontends) und 7 Tage gültige Refresh Tokens als httpOnly-Cookie, wobei ' +
                        'in der MongoDB nur der SHA-256-Hash gespeichert wird. Eine Refresh-Token-Rotation ' +
                        'mit Reuse Detection wertet jede Wiederverwendung eines alten Tokens als Diebstahl ' +
                        'und widerruft sofort die gesamte Token-Familie. Express-Middlewares (protect, ' +
                        'adminOnly) steuern nicht nur den Routenzugriff, sondern auch Field-Level Write ' +
                        'Guards: eine Fachkraft darf die Kontaktdaten ihrer Familie ändern, nicht aber ' +
                        'Status, Stundenkontingent oder Zuweisung. Die MongoDB-Struktur ist referenziert ' +
                        '(User, Client, Appointment) mit Sub-Dokumenten für eng gekoppelte Daten wie die ' +
                        'RSVP-Zusagen bei CalendarEvents. Die Business-Logik läuft über Aggregationen: die ' +
                        'Auslastung ist progressPercent = round((totalMinutes / (weeklyHoursQuota × 60)) × ' +
                        '100); ausgefallene Termine werden mit pauschal 90 Minuten gutgeschrieben (gedeckelt ' +
                        'auf 2 pro Familie/Monat) und bei Tandem-Fällen fair zu je 45 Minuten mit einem ' +
                        'Overhead-Faktor von 1,3 aufgeteilt; Überstunden werden bei jedem Clock-out aus der ' +
                        'ISO-Wochensumme gegen das Wochenziel neu berechnet. Das React-19-/Tailwind-v4-' +
                        'Frontend gibt Fachkräften personalisierte KPI-Strips und Ringdiagramme, Admins ein ' +
                        'Live-Dashboard, wer eingestempelt ist, plus Team-Auslastungstabellen. Dokumente ' +
                        'werden via presigned PUT-URL direkt zu S3 hochgeladen, sodass die API die Datei nie ' +
                        'proxyt; die Metadaten werden erst nach bestätigtem Upload persistiert. Eine einzige ' +
                        'WeekView steuert Eigen- und Teamansicht über einen colorMode-Prop, und alle ' +
                        'Frontend-Typen spiegeln die Zod-Shapes des Backends, um inkonsistente Payloads ' +
                        'auszuschließen.',
                },
                {
                    heading: 'Ergebnis',
                    body:
                        'Das automatisierte Zusammenrechnen von Terminen und die integrierte Zeiterfassung ' +
                        'ersparen pro Fachkraft mehrere Stunden manuellen Übertragungs- und Kontrollaufwand ' +
                        'pro Woche. Admins sehen Engpässe und Kontingentüberschreitungen sofort anhand ' +
                        'visueller Indikatoren – sich füllende Stundenringe statt überlaufender Balken – und ' +
                        'Urlaubsanträge werden mit einer Live-Vorschau der beanspruchten Arbeitstage ' +
                        'validiert, was Fehlplanungen minimiert. Die Kombination aus Zod-Laufzeitvalidierung, ' +
                        'gehashter Token-Ablage, restriktivem S3-Zugriff (Download-Links verfallen nach einer ' +
                        'Stunde) und einem lückenlosen Audit Trail bei nachträglichen Zeiterfassungs-Edits ' +
                        'garantiert hohe Datensicherheit und Revisionssicherheit für den Träger.',
                },
                {
                    heading: 'Fazit & Lessons Learned',
                    body:
                        'Das native Node-Ökosystem hat überzeugt: native package.json#imports für ' +
                        'Pfad-Aliase und Node-22-Features (--watch, --env-file) haben die Developer ' +
                        'Experience verbessert und Abhängigkeiten reduziert. Ein schlanker eigener ' +
                        'fetch-Wrapper, der bei einem 401 transparent das Token erneuert und den Request ' +
                        'wiederholt, erwies sich als wartbarer als Axios und hielt die Bundle-Size klein. ' +
                        'Für stark steigende Fallzahlen wäre der nächste Schritt, die aktuell ' +
                        'zeitgesteuerten MongoDB-Aggregationen hin zu einer Event-Driven-Architektur (z. B. ' +
                        'via Change Streams) zu bewegen, um Überstunden- und Auslastungsmetriken asynchron ' +
                        'im Hintergrund zu berechnen.',
                },
            ],
        },
        es: {
            title: 'Sistema de gestión de clientes para trabajo social',
            summary:
                'Paneles para especialistas y coordinadores del ámbito del trabajo social: informes, ' +
                'documentación, carga de trabajo, vacaciones/bajas por enfermedad, horarios y ' +
                'gestión de citas. Almacenamiento de archivos compartido y protegido por RBAC por ' +
                'cliente, con sistema de notificaciones e invitaciones para las citas.',
            sections: [
                {
                    heading: 'Situación',
                    body:
                        'En la ayuda socioeducativa a familias (SPFH), los especialistas trabajan ' +
                        'directamente con familias en situaciones vitales a menudo complejas. Antes de este ' +
                        'CMS, documentar citas, informes y planes de ayuda estaba muy fragmentado. Los ' +
                        'horarios, las citas y los tiempos de desplazamiento se registraban a mano, y ' +
                        'cuadrar las horas realizadas contra el cupo semanal aprobado de cada familia ' +
                        'dependía de hojas de cálculo propensas a errores. Los administradores no tenían una ' +
                        'visión en tiempo real de la carga real del equipo, de los solapamientos de ' +
                        'vacaciones ni de quién estaba de servicio. Documentos sensibles de cada caso se ' +
                        'compartían a veces localmente o por canales inseguros, y no existía una separación ' +
                        'estricta a nivel de sistema entre los permisos administrativos y el acceso de ' +
                        'escritura de los especialistas a los expedientes.',
                },
                {
                    heading: 'Tarea',
                    body:
                        'El objetivo era una plataforma full-stack conforme al RGPD, eficiente e intuitiva ' +
                        'que minimizara la carga administrativa y garantizara la seguridad de los datos. A ' +
                        'nivel funcional necesitaba una gestión completa de clientes con atención en tándem ' +
                        '(dos especialistas comparten un caso), un registro de jornada íntegro y a prueba de ' +
                        'manipulaciones con cálculo de horas extra, y el cálculo automático del uso del cupo ' +
                        'por familia con un reparto justo del tiempo cancelado. A nivel técnico, lo difícil ' +
                        'era una autenticación segura para expedientes sensibles, una gestión de archivos ' +
                        'escalable sin sobrecarga del servidor con documentos grandes, y seguridad de tipos ' +
                        'de extremo a extremo, de modo que las peticiones a la API coincidan en tiempo de ' +
                        'ejecución con los tipos del backend y estos se reflejen uno a uno en el frontend de ' +
                        'React.',
                },
                {
                    heading: 'Acción',
                    body:
                        'La autenticación usa JWT con estado: tokens de acceso de vida corta (15 min, en ' +
                        'memoria del frontend) y tokens de refresco válidos 7 días como cookie httpOnly, ' +
                        'guardando en MongoDB solo el hash SHA-256. Una rotación de tokens de refresco con ' +
                        'detección de reutilización interpreta cualquier reuso de un token antiguo como robo ' +
                        'y revoca de inmediato toda la familia de tokens. Los middlewares de Express ' +
                        '(protect, adminOnly) controlan no solo el acceso a rutas, sino también guardas de ' +
                        'escritura a nivel de campo: un especialista puede editar los datos de contacto de ' +
                        'su familia, pero no su estado, su cupo de horas ni su asignación. La estructura en ' +
                        'MongoDB es referenciada (User, Client, Appointment) con subdocumentos para datos ' +
                        'muy acoplados, como las confirmaciones RSVP de los CalendarEvents. La lógica de ' +
                        'negocio corre sobre agregaciones: el uso es progressPercent = round((totalMinutes / ' +
                        '(weeklyHoursQuota × 60)) × 100); las citas canceladas se acreditan con 90 minutos ' +
                        'fijos (con un tope de 2 por familia/mes) y en los casos en tándem se reparten de ' +
                        'forma justa a 45 minutos cada uno con un factor de sobrecarga de 1,3; las horas ' +
                        'extra se recalculan en cada fichaje de salida a partir del total de la semana ISO ' +
                        'frente al objetivo semanal. El frontend en React 19 / Tailwind v4 ofrece a los ' +
                        'especialistas tiras de KPI personalizadas y gráficos de anillo, y a los ' +
                        'administradores un panel en vivo de quién ha fichado, más tablas de carga del ' +
                        'equipo. Los documentos se suben directamente a S3 mediante una URL PUT prefirmada, ' +
                        'de modo que la API nunca hace de proxy del archivo; los metadatos se persisten solo ' +
                        'tras confirmar la subida. Una única WeekView controla la vista propia y la del ' +
                        'equipo mediante un prop colorMode, y todos los tipos del frontend reflejan los ' +
                        'esquemas Zod del backend para descartar payloads inconsistentes.',
                },
                {
                    heading: 'Resultado',
                    body:
                        'El cálculo automático de las citas junto con el registro de jornada integrado ' +
                        'elimina varias horas semanales de transcripción y comprobación manual por ' +
                        'especialista. Los administradores ven cuellos de botella y excesos de cupo al ' +
                        'instante mediante indicadores visuales —anillos de horas que se llenan en lugar de ' +
                        'barras que se desbordan— y las solicitudes de vacaciones se validan con una vista ' +
                        'previa en vivo de los días laborables consumidos, reduciendo los errores de ' +
                        'planificación. La combinación de validación en tiempo de ejecución con Zod, ' +
                        'almacenamiento de tokens con hash, acceso restringido a S3 (los enlaces de descarga ' +
                        'caducan tras una hora) y un registro de auditoría completo en las ediciones ' +
                        'retroactivas de fichajes garantiza una alta seguridad de datos y trazabilidad para ' +
                        'la entidad.',
                },
                {
                    heading: 'Conclusiones clave',
                    body:
                        'El ecosistema nativo de Node convenció: los package.json#imports nativos para los ' +
                        'alias de rutas y las funciones de Node 22 (--watch, --env-file) mejoraron la ' +
                        'experiencia de desarrollo y redujeron dependencias. Un pequeño fetch wrapper propio ' +
                        'que ante un 401 refresca el token de forma transparente y reintenta la petición ' +
                        'resultó más mantenible que Axios y mantuvo el bundle pequeño. Para cargas de casos ' +
                        'mucho mayores, el siguiente paso sería llevar las actuales agregaciones de MongoDB ' +
                        'basadas en tiempo hacia una arquitectura orientada a eventos (por ejemplo, con ' +
                        'Change Streams) para calcular las métricas de horas extra y de carga de forma ' +
                        'asíncrona en segundo plano.',
                },
            ],
        },
    },
    lightme: {
        de: {
            title: 'lightMe – Ganzheitliche Health-App',
            summary:
                'Ernährungs-, Stimmungs- und Bewegungs-Tracking mit API-Kaskade (FatSecret, USDA, OpenFoodFacts), ' +
                'Barcode-Scanner, vollständiger Authentifizierung und Stripe-Abonnements. ' +
                'Admin-Dashboard mit Daten-Insights.',
            sections: [
                {
                    heading: 'Situation',
                    body:
                        'Der Markt für Fitness- und Ernährungs-Apps ist stark fragmentiert – Nutzer:innen ' +
                        'jonglieren getrennt mit Kalorienzählern, Aktivitätstrackern, Schlaftagebüchern und ' +
                        'kostenpflichtigen Coaching-Programmen. Für das 12-Wochen-Programm von LightMe ' +
                        'stachen drei Kernprobleme heraus. Die Ernährungsdaten waren fragmentiert und voller ' +
                        'Lücken: keine einzelne API deckt alle Nahrungsmittel, Barcodes und Eigenkreationen ' +
                        'zuverlässig ab, sodass Suchanfragen fehlschlugen oder unvollständige Makronährwerte ' +
                        'lieferten. Admins und Coaches hatten keine Möglichkeit, den Fortschritt der ' +
                        'Nutzer:innen (z. B. prozentualer Gewichtsverlust, Einhaltung der Vorgaben) ' +
                        'kohortenbasiert auszuwerten. Und die Zahlungsströme über die Stufen Free, Trial, ' +
                        'Basic und Premium verlangten ein manipulationssicheres System, das Testphasen ' +
                        'kontrolliert und Zahlungsabbrüche ohne Datenverlust verarbeitet.',
                },
                {
                    heading: 'Aufgabe',
                    body:
                        'Ziel des MVP (Deadline: 16. Mai 2026) war eine nahtlos integrierte, extrem ' +
                        'performante Full-Stack-Web-App. Funktional brauchte es ein interaktives ' +
                        'Ernährungstagebuch mit Live-Nährwertskalierung und Barcode-Lookup per Kamera, ein ' +
                        'visuelles Dashboard für Gewicht, Maße, Schlaf und Aktivität über frei wählbare ' +
                        'Zeiträume und einen 14-tägigen, kartenlosen Premium-Testzugang, der pro Nutzer:in ' +
                        'strikt einmalig ist. Die technischen Herausforderungen: In Express 5 ist req.query ' +
                        'eine schreibgeschützte Getter-Eigenschaft, sodass Typ-Konvertierungen aus ' +
                        'Validierungsbibliotheken standardmäßig verloren gehen und Datenbank-Aggregationen ' +
                        'zum Absturz bringen; Stripe-Webhooks mussten gegen Race-Conditions und mehrfach ' +
                        'gefeuerte Zustellungen gehärtet werden; und das mächtige Admin-Dashboard durfte das ' +
                        'initiale Laden der regulären App nicht verlangsamen.',
                },
                {
                    heading: 'Umsetzung',
                    body:
                        'Das Frontend hält das Access Token ausschließlich im flüchtigen Arbeitsspeicher; ' +
                        'läuft es ab (15 Min), fängt ein Axios-Interceptor den 401-Fehler ab, stößt im ' +
                        'Hintergrund über das httpOnly-Cookie (/auth/refresh) einen Silent Refresh an und ' +
                        'wiederholt die ursprüngliche Anfrage unbemerkt. Ändert ein:e Nutzer:in das ' +
                        'Passwort, wird das gesamte refreshTokens[]-Array in der MongoDB geleert und alle ' +
                        'anderen Sessions werden plattformweit sofort ungültig. Die Lebensmittelsuche läuft ' +
                        'über eine kaskadierende Fassade in nutritionService.ts – OpenFoodFacts → FatSecret ' +
                        '(OAuth 1.0) → USDA FDC → eigene Custom Ingredients – bis Treffer erzielt werden. Der ' +
                        'Stripe-Webhook ist strikt und Ack-First: Signaturprüfung über den Raw-Body, ' +
                        'Idempotenz-Marker (eindeutiger eventId-Index; ein Duplicate-Key-Fehler bricht sofort ' +
                        'mit 200 OK ab), innerhalb von ~100 ms received:true zurücksenden, um Retries zu ' +
                        'vermeiden, und erst danach das Event asynchron verarbeiten – bei Fehlern wird der ' +
                        'Marker gelöscht, damit der Stripe-Retry greift. Im Frontend wird das gesamte ' +
                        'Admin-Dashboard per React.lazy nachgeladen, sodass reguläre Nutzer:innen es nie ' +
                        'herunterladen, monolithische Seiten wurden in fokussierte Hooks und Panels ' +
                        'aufgeteilt (die Food-Diary-Seite schrumpfte von 991 auf 278 Zeilen), und die ' +
                        'Nährwertskalierung (scaleFood) ist zentralisiert, sodass Scanner, Favoriten und ' +
                        'Suche dieselbe Logik nutzen.',
                },
                {
                    heading: 'Ergebnis',
                    body:
                        'Der kaskadierende API-Ansatz und ein Snapshot-Pattern bei Rezepten (Nährwerte ' +
                        'werden beim Hinzufügen zum Rezept eingefroren) halten das Ernährungstagebuch ' +
                        'konsistent, selbst wenn das zugrundeliegende Lebensmittel später editiert oder ' +
                        'gelöscht wird. Der kartenlose Testzugang senkt die Einstiegshürde massiv – keine ' +
                        'Zahlungsdaten für 14 Tage Premium – während ein persistentes hasUsedTrial-Flag am ' +
                        'User-Model die mehrfache Ausnutzung blockiert. Das Admin-Panel berechnet ' +
                        'demografische und fortschrittsbasierte Kennzahlen (z. B. avgWeightLossPct, ' +
                        'Kohorten-Ernährungsdurchschnitte) und ermöglicht dem Betreiber datengetriebene ' +
                        'Anpassungen des 12-Wochen-Programms.',
                },
                {
                    heading: 'Fazit & Lessons Learned',
                    body:
                        'Ein paar Express-/Mongo-Fallstricke prägten die Umsetzung. Da req.query in Express ' +
                        '5 ein Getter ist, schlagen delete und Object.assign still fehl und geänderte ' +
                        'Zod-Werte kamen nie in den Controllern an – gelöst, indem eine validateQuery-' +
                        'Middleware das gesamte query-Objekt via Object.defineProperty hart neu definiert. ' +
                        'Mongoose castet String-IDs bei normalen Abfragen automatisch zu ObjectIds, in ' +
                        'Aggregations-$match jedoch nicht, sodass Pipelines leere Arrays lieferten, bis IDs ' +
                        'explizit mit new mongoose.Types.ObjectId(userId) gecastet wurden. Fehlende optionale ' +
                        'Werte (Schritte, Distanz) ließen ganze Wochensummen zu null mutieren, bis $ifNull ' +
                        'konsequent eingesetzt wurde. Und Express matchte /recipes/:id vor /recipes/range und ' +
                        'interpretierte „range“ als ID – behoben, indem statische Routen stets vor ' +
                        'dynamischen registriert werden.',
                },
            ],
        },
        es: {
            title: 'lightMe – App de salud integral',
            summary:
                'Seguimiento de nutrición, estado de ánimo y actividad con cascada de APIs (FatSecret, USDA, OpenFoodFacts), ' +
                'escáner de códigos de barras, autenticación completa y suscripciones con Stripe. ' +
                'Panel de administración con análisis de datos.',
            sections: [
                {
                    heading: 'Situación',
                    body:
                        'El mercado de apps de fitness y nutrición está muy fragmentado: los usuarios hacen ' +
                        'malabares por separado con contadores de calorías, rastreadores de actividad, ' +
                        'diarios de sueño y programas de coaching de pago. Para el programa de 12 semanas de ' +
                        'LightMe destacaban tres problemas centrales. Los datos nutricionales estaban ' +
                        'fragmentados y llenos de lagunas: ninguna API cubre de forma fiable todos los ' +
                        'alimentos, códigos de barras y creaciones propias, así que las búsquedas fallaban o ' +
                        'devolvían macros incompletos. Administradores y coaches no tenían manera de evaluar ' +
                        'el progreso de los usuarios (p. ej. porcentaje de pérdida de peso, cumplimiento) por ' +
                        'cohortes. Y los flujos de pago entre los niveles Free, Trial, Basic y Premium ' +
                        'exigían un sistema a prueba de manipulaciones que controlara las pruebas y procesara ' +
                        'los pagos cancelados sin pérdida de datos.',
                },
                {
                    heading: 'Tarea',
                    body:
                        'El objetivo del MVP (fecha límite: 16 de mayo de 2026) era una app web full-stack ' +
                        'integrada sin fisuras y de altísimo rendimiento. A nivel funcional necesitaba un ' +
                        'diario de comidas interactivo con escalado de nutrientes en vivo y búsqueda por ' +
                        'código de barras con la cámara, un panel visual de peso, medidas, sueño y actividad ' +
                        'en periodos libremente elegibles, y un acceso de prueba Premium de 14 días sin ' +
                        'tarjeta, estrictamente único por usuario. Los retos técnicos: en Express 5, ' +
                        'req.query es un getter de solo lectura, de modo que las conversiones de tipo de las ' +
                        'librerías de validación se pierden por defecto y hacen caer las agregaciones de base ' +
                        'de datos; los webhooks de Stripe había que endurecerlos frente a condiciones de ' +
                        'carrera y entregas duplicadas; y el potente panel de administración no podía ' +
                        'ralentizar la carga inicial de la app normal.',
                },
                {
                    heading: 'Acción',
                    body:
                        'El frontend guarda el token de acceso solo en memoria volátil; cuando expira (15 ' +
                        'min), un interceptor de Axios captura el error 401, hace en segundo plano un ' +
                        'refresco silencioso a través de la cookie httpOnly (/auth/refresh) y reintenta la ' +
                        'petición original sin que el usuario lo note. Al cambiar la contraseña se vacía todo ' +
                        'el array refreshTokens[] en MongoDB, invalidando al instante cualquier otra sesión ' +
                        'en toda la plataforma. La búsqueda de alimentos pasa por una fachada en cascada en ' +
                        'nutritionService.ts —OpenFoodFacts → FatSecret (OAuth 1.0) → USDA FDC → ingredientes ' +
                        'propios— hasta obtener resultados. El webhook de Stripe es estricto y ack-first: ' +
                        'verificar la firma sobre el raw body, escribir un marcador de idempotencia (un ' +
                        'índice único eventId; un error de clave duplicada corta de inmediato con 200 OK), ' +
                        'devolver received:true en ~100 ms para evitar reintentos y solo entonces procesar el ' +
                        'evento de forma asíncrona, borrando el marcador ante un fallo para que el reintento ' +
                        'de Stripe funcione. En el frontend, todo el panel de administración se carga con ' +
                        'React.lazy para que los usuarios normales nunca lo descarguen, las páginas ' +
                        'monolíticas se dividieron en hooks y paneles enfocados (la página del diario de ' +
                        'comidas pasó de 991 a 278 líneas) y el escalado de nutrientes (scaleFood) está ' +
                        'centralizado para que escáner, favoritos y búsqueda usen la misma lógica.',
                },
                {
                    heading: 'Resultado',
                    body:
                        'El enfoque de API en cascada y un patrón de snapshot en las recetas (los valores ' +
                        'nutricionales se congelan al añadir un alimento a la receta) mantienen el diario de ' +
                        'comidas consistente, incluso si el alimento subyacente se edita o elimina después. ' +
                        'La prueba sin tarjeta reduce enormemente la barrera de entrada —sin datos de pago ' +
                        'para 14 días de Premium— mientras que un flag persistente hasUsedTrial en el modelo ' +
                        'de usuario bloquea el abuso repetido. El panel de administración calcula métricas ' +
                        'demográficas y basadas en progreso (p. ej. avgWeightLossPct, medias de nutrición por ' +
                        'cohorte), lo que permite al operador ajustar el programa de 12 semanas a partir de ' +
                        'datos reales.',
                },
                {
                    heading: 'Conclusiones clave',
                    body:
                        'Varios escollos de Express/Mongo marcaron el desarrollo. Como req.query es un getter ' +
                        'en Express 5, delete y Object.assign fallan en silencio y los valores de Zod ' +
                        'convertidos nunca llegaban a los controladores —resuelto redefiniendo por completo el ' +
                        'objeto query con Object.defineProperty en un middleware validateQuery. Mongoose ' +
                        'convierte automáticamente los IDs de string a ObjectIds en las consultas normales, ' +
                        'pero no dentro del $match de una agregación, así que las pipelines devolvían arrays ' +
                        'vacíos hasta castear los IDs explícitamente con new mongoose.Types.ObjectId(userId). ' +
                        'Los valores opcionales ausentes (pasos, distancia) hacían que sumas semanales ' +
                        'enteras mutaran a null hasta aplicar $ifNull de forma consistente. Y Express casaba ' +
                        '/recipes/:id antes que /recipes/range, leyendo «range» como un id —corregido ' +
                        'registrando siempre las rutas estáticas antes que las dinámicas.',
                },
            ],
        },
    },
    reciply: {
        de: {
            title: 'Reciply – Rezept-Scraper',
            summary:
                'Füge die URL eines Koch-Reels aus den sozialen Medien ein und erhalte ein sauberes, ' +
                'strukturiertes, editierbares Rezept, das dir gehört. yt-dlp zieht die Caption, Gemini ' +
                'parst sie hinter Zod-Validierung in Titel/Zutaten/Schritte, und nichts wird gespeichert, ' +
                'bis du bestätigst. Persönliche Bibliothek, Favoriten, Bild-Uploads und ein öffentlicher ' +
                'Community-Feed.',
            sections: [
                {
                    heading: 'Situation',
                    body:
                        'Rezept-Inhalte leben in Social-Media-Reels, doch das eigentliche Rezept steckt in ' +
                        'einer Caption, die man scrollen, per Screenshot festhalten und von Hand abtippen ' +
                        'muss. Kein Tool machte aus einer Video-URL ein gespeichertes, strukturiertes Rezept, ' +
                        'das einem selbst gehört – das Ziel war: eine URL rein, ein strukturiertes Rezept ' +
                        'raus, abgelegt in der eigenen Bibliothek.',
                },
                {
                    heading: 'Aufgabe',
                    body:
                        'Eine Full-Stack-App bauen, die aus einer Instagram-/Facebook-Reel-URL ein sauberes, ' +
                        'editierbares, persistiertes Rezept mit Nutzerkonten, Bildern und optionalem ' +
                        'Community-Sharing erzeugt – ohne die Datenbank mit unbestätigtem KI-Output zu ' +
                        'füllen und robust genug für den Deploy. Die zentrale Design-Vorgabe: Die Extraktion ' +
                        'darf nicht persistieren. Das Parsen liefert einen flüchtigen Entwurf, den der:die ' +
                        'Nutzer:in bearbeitet und erst dann speichert, sodass sich die DB nie mit KI-Rateraten ' +
                        'füllt.',
                },
                {
                    heading: 'Umsetzung',
                    body:
                        'Die Pipeline ist URL → Scraper → KI-Parser → editierbare Vorschau → Speichern. Ein ' +
                        'Caption-First-Scraper ruft yt-dlp auf (--dump-json, ohne Browser) und deckt ~80 % ' +
                        'der Reels ab; Whisper-Transkription und Headless-Browser-Fallbacks sind ' +
                        'dokumentiert, aber bewusst zurückgestellt, um v1 klein zu halten. Die Captions gehen ' +
                        'an Gemini mit einem responseSchema für strukturierten Output, und jedes Ergebnis ' +
                        'wird Zod-validiert, bevor es den Client erreicht. Die Auth ist JWT mit kurzlebigen ' +
                        'Access Tokens (15 Min) plus rotierenden Refresh Tokens (7 Tage, als SHA-256-Hash ' +
                        'gespeichert, als httpOnly-Cookie ausgeliefert) mit Reuse Detection, bcrypt (Cost 12) ' +
                        'für Passwörter und einem Ownership-Scoping pro userId bei jedem Lesen, Schreiben und ' +
                        'Löschen (404 statt Existenz preiszugeben). Bilder werden zu Cloudinary hochgeladen, ' +
                        'wobei die public_id deterministisch aus der gespeicherten URL abgeleitet wird, und ' +
                        'ein Community-Feed lässt Nutzer:innen veröffentlichen und als eigenständigen ' +
                        'Snapshot „zur Bibliothek hinzufügen“; die Rezept-Identität ist die sourceUrl, sodass ' +
                        'Duplikate über App-Level-Guards ein 409 zurückgeben statt über einen riskanten ' +
                        'Unique-Index. Teure Routen (extract, community) werden im Memory gecacht, ' +
                        'Rate-Limiter decken die globale API plus Extract, Bild-Upload und Refresh ab, die ' +
                        'Umgebung wird beim Boot Zod-validiert, Fehler nutzen ein einziges { message }-' +
                        'Envelope, und das async Auto-Forwarding von Express 5 hat ~16 überflüssige ' +
                        'try/catch-Blöcke entfernt.',
                },
                {
                    heading: 'Ergebnis',
                    body:
                        'v1 läuft durchgängig: URL → yt-dlp → Gemini → editierbare Vorschau → MongoDB, mit ' +
                        'Auth, Bibliotheken pro Nutzer:in, Favoriten, Bild-Uploads und einem öffentlichen ' +
                        'Community-Feed mit Dedup. Es ist deploy-gehärtet – In-Memory-Caching, vollständige ' +
                        'Rate-Limiter-Abdeckung, Env-Validierung beim Boot und strikte Ownership-Isolation. ' +
                        'Der Umfang bleibt bewusst auf Caption-basierte Extraktion mit dokumentierten ' +
                        'Upgrade-Pfaden begrenzt, sodass die Codebasis überschaubar bleibt.',
                },
                {
                    heading: 'Fazit & Lessons Learned',
                    body:
                        'Der Zuschnitt auf die Caption-First-Leiter und das Aufschreiben – statt Bauen – der ' +
                        'Whisper-/Headless-Fallbacks hielt v1 auslieferbar, ohne Türen zu schließen. Extract ' +
                        'und Save getrennt zu halten war die entscheidende Architekturentscheidung – die ' +
                        'Datenbank enthält nur von Menschen bestätigte Rezepte. App-Level-409-Dedup über die ' +
                        'sourceUrl vermied einen Unique-Index und dessen Migrationsrisiko auf Bestandsdaten, ' +
                        'und das async Auto-Forwarding von Express 5 hat still eine ganze Klasse Boilerplate ' +
                        'gelöscht. Der naheliegende nächste Schritt ist der Tausch der In-Memory-Caches gegen ' +
                        'Redis, bereits an der Aufrufstelle markiert.',
                },
            ],
        },
        es: {
            title: 'Reciply – Extractor de recetas',
            summary:
                'Pega la URL de un reel de cocina de redes sociales y recibe una receta limpia, ' +
                'estructurada y editable que te pertenece. yt-dlp extrae la descripción, Gemini la ' +
                'convierte en título/ingredientes/pasos con validación de Zod, y no se guarda nada hasta ' +
                'que confirmas. Biblioteca personal, favoritos, subida de imágenes y un feed comunitario ' +
                'público.',
            sections: [
                {
                    heading: 'Situación',
                    body:
                        'El contenido de recetas vive en reels de redes sociales, pero la receta en sí queda ' +
                        'atrapada en una descripción que hay que desplazar, capturar y volver a teclear a ' +
                        'mano. Ninguna herramienta convertía la URL de un vídeo en una receta guardada y ' +
                        'estructurada que fuera realmente tuya —el objetivo era: una URL de entrada, una ' +
                        'receta estructurada de salida, guardada en tu propia biblioteca.',
                },
                {
                    heading: 'Tarea',
                    body:
                        'Construir una app full-stack que tome la URL de un reel de Instagram/Facebook y ' +
                        'produzca una receta limpia, editable y persistida con cuentas de usuario, imágenes y ' +
                        'compartición comunitaria opcional —sin contaminar la base de datos con salida de IA ' +
                        'sin confirmar, y lo bastante endurecida para desplegarla. La restricción de diseño ' +
                        'central: la extracción no debe persistir. El parseo devuelve un borrador efímero que ' +
                        'el usuario edita y solo entonces guarda, de modo que la BD nunca se llena de ' +
                        'conjeturas de la IA.',
                },
                {
                    heading: 'Acción',
                    body:
                        'La pipeline es URL → scraper → parser de IA → vista previa editable → guardar. Un ' +
                        'scraper que prioriza la descripción invoca yt-dlp (--dump-json, sin navegador) y ' +
                        'cubre ~80 % de los reels; la transcripción con Whisper y los fallbacks con navegador ' +
                        'headless están documentados pero deliberadamente aplazados para mantener v1 pequeña. ' +
                        'Las descripciones van a Gemini con un responseSchema para salida estructurada, y ' +
                        'cada resultado se valida con Zod antes de llegar al cliente. La autenticación es JWT ' +
                        'con tokens de acceso de vida corta (15 min) más tokens de refresco rotatorios (7 ' +
                        'días, guardados como hash SHA-256 y entregados como cookie httpOnly) con detección ' +
                        'de reutilización, bcrypt (coste 12) para las contraseñas y un alcance de propiedad ' +
                        'por userId en cada lectura, escritura y borrado (404 en lugar de filtrar la ' +
                        'existencia). Las imágenes se suben a Cloudinary con el public_id derivado de forma ' +
                        'determinista de la URL guardada, y un feed comunitario permite a los usuarios ' +
                        'publicar y «añadir a mi biblioteca» como un snapshot independiente; la identidad de ' +
                        'la receta es la sourceUrl, así que los duplicados devuelven un 409 mediante guardas a ' +
                        'nivel de aplicación en vez de un índice único arriesgado. Las rutas costosas ' +
                        '(extract, community) se cachean en memoria, los rate limiters cubren la API global ' +
                        'más extract, subida de imágenes y refresco, el entorno se valida con Zod al ' +
                        'arrancar, los errores usan un único envoltorio { message }, y el auto-reenvío async ' +
                        'de Express 5 eliminó ~16 bloques try/catch redundantes.',
                },
                {
                    heading: 'Resultado',
                    body:
                        'La v1 funciona de extremo a extremo: URL → yt-dlp → Gemini → vista previa editable → ' +
                        'MongoDB, con autenticación, bibliotecas por usuario, favoritos, subida de imágenes y ' +
                        'un feed comunitario público con deduplicación. Está endurecida para desplegar ' +
                        '—caché en memoria, cobertura completa de rate limiters, validación del entorno al ' +
                        'arrancar y aislamiento estricto de propiedad. El alcance se mantiene ' +
                        'deliberadamente en la extracción basada en descripciones con rutas de mejora ' +
                        'documentadas, de modo que la base de código siga siendo fácil de razonar.',
                },
                {
                    heading: 'Conclusiones clave',
                    body:
                        'Acotar a la escalera «primero la descripción» y dejar por escrito —en lugar de ' +
                        'construir— los fallbacks de Whisper/headless mantuvo la v1 lista para entregar sin ' +
                        'cerrar ninguna puerta. Mantener separados extract y save resultó ser la decisión de ' +
                        'arquitectura clave: la base de datos solo contiene recetas confirmadas por una ' +
                        'persona. La deduplicación con 409 a nivel de aplicación sobre la sourceUrl evitó un ' +
                        'índice único y su riesgo de migración sobre los datos existentes, y el auto-reenvío ' +
                        'async de Express 5 eliminó en silencio toda una clase de código repetitivo. El ' +
                        'siguiente paso obvio es cambiar las cachés en memoria por Redis, ya marcado en el ' +
                        'punto de llamada.',
                },
            ],
        },
    },
    ksoko: {
        de: {
            title: 'KSoKo – Sozialer Kompass',
            summary:
                'Ein niedrigschwelliger sozialer Kompass für Kassel: städtische Veranstaltungen, Aktivitäten und Beratungsangebote auf einer Karte und in filterbaren Listen, speicherbar in eine persönliche Bibliothek, die zugleich als Kalender dient. Drei unabhängige Datenpipelines (täglicher Scraper, Nominatim-Geocoding-Backfill, CSV-Partnerimport) speisen eine einheitliche Lese-API, dazu ein auch für Gäste nutzbarer Chatbot mit strukturellen Schutzmechanismen gegen halluzinierte Empfehlungen.',
            sections: [
                {
                    heading: 'Situation',
                    body: 'In Kassel und vergleichbaren Städten verteilt sich das Wissen über kostengünstige Familienangebote und soziale Beratungsstellen. Schuldnerberatung, Suchthilfe, Familienhilfe, Asylberatung, Ämter verteilt über Dutzende Einzelseiten, Amtsportale und PDFs. Gerade die Menschen, die diese Informationen am dringendsten brauchen, Familien und finanziell benachteiligte Haushalte, haben am wenigsten Zeit und institutionelles Wissen, um sie zusammenzusuchen. Es gab keine einzige, niedrigschwellige Oberfläche, die „was ist los” (Veranstaltungen, Aktivitäten) mit „wer hilft” (Beratungsangebote) verbindet, geschweige denn eine, die beides in einem persönlichen Kalender speicherbar macht.',
                },
                {
                    heading: 'Aufgabe',
                    body: 'Ziel war eine Webanwendung, startend mit Kassel als Pilotstadt, die Veranstaltungen und Beratungsangebote auf einer Karte und in filterbaren Listen zugänglich macht, das Speichern in eine persönliche Bibliothek und einen Kalender erlaubt und Anbieterdetails, wie Öffnungszeiten, Adresse, Telefon ohne Bezahlschranke oder Ticketing-Reibung liefert. Die Nicht-Ziele bestimmten die Aufgabe fast so sehr wie die Ziele selbst: kein „zweites Eventim” mit Kommerz-Fokus, keine kalt-bürokratische Oberfläche — die Anwendung musste warm und barrierearm wirken. Technisch bestand die Aufgabe darin, ein Datenmodell und eine Architektur zu entwerfen, die drei grundverschiedene Datenquellen — manuell angelegte Aktivitäten, ein gescrapter städtischer Veranstaltungskalender und partnerübermittelte Beratungsdaten — in einer konsistenten Lese-API zusammenführt, ohne Logik pro Inhaltstyp zu duplizieren.',
                },
                {
                    heading: 'Umsetzung',
                    body: 'Das System ist eine klassische Drei-Schichten-MERN-Architektur (Express 5, MongoDB/Mongoose 9, React 19 + TypeScript, Node.js), bei der eine Scraping-/Import-Pipeline als eigenständiger, asynchroner Datenproduzent neben der API steht statt als Teil des Request-Pfads. Der Client spricht ausschließlich mit der Express-API — nie direkt mit MongoDB, Cloudinary, S3 oder Gemini —, sodass Autorisierung, Validierung (Zod) und Rate-Limiting an genau einer Stelle durchgesetzt werden. Für das Datenmodell blieben die drei Inhaltstypen Activity, ScrapedEvent und Beratung bewusst eigenständige Mongoose-Modelle statt einer gemeinsamen Basis-Collection — sie teilen zu wenige Felder, um Vererbung zu rechtfertigen. Vereinheitlicht werden sie stattdessen an der API-Grenze: GET /events verschmilzt Activity und ScrapedEvent zu einer datumssortierten Liste, und ein einziges polymorphes Favorite-Modell (itemType + itemId über Mongoose refPath, Compound-Unique-Index) macht alle drei gleichermaßen merkbar — ein gemerktes Item mit Datum ist damit direkt der Kalendereintrag, ein separates Appointment-Modell blieb bewusst aus. Kategorien laufen als geprüfte Whitelist statt Fremdschlüssel, damit Filterung eine einfache $in-Query bleibt statt populate() in jedem Controller. Geodaten sind Pflichtfeld bei Activity und Beratung (GeoJSON Point mit 2dsphere-Index); bei ScrapedEvent, wo die Stadt nur einen Ortsnamen als Text liefert, wird die Koordinate asynchron per Nominatim nachgetragen. Authentifizierung nutzt einen kurzlebigen JWT-Access-Token (15 Minuten, nur im Speicher des Clients, nie in localStorage) zusammen mit einem rotierenden, httpOnly Refresh-Token-Cookie (7 Tage); jeder Refresh-Token gehört zu einer Familie, und die Wiederverwendung eines bereits rotierten Tokens widerruft die gesamte Familie sofort, der Standardschutz gegen einen gestohlenen, aber verzögert eingesetzten Refresh-Token. Passwörter werden mit bcrypt gehasht, Rollen (user/creator/admin) laufen über eine requireRole(...)-Middleware-Factory plus ein generisches isDocOwner(Model) für Owner-oder-Admin-Regeln; Beratungsstellen-Daten sind bewusst auf adminOnly-Schreibrechte beschränkt statt der laxeren creator-Rolle für Aktivitäten, weil eine falsche Angabe zu einer Schuldnerberatung ein anderes Risiko ist als ein falsches Event. Auf der Datenseite speisen drei unabhängige Pipelines dieselbe Lese-Oberfläche: ein täglicher Cron-Scraper gegen den städtischen Veranstaltungskalender mit idempotentem Upsert auf externalId, ein Geocoding-Backfill gegen Nominatim (aktuell rund 60 % der rund 3.180 gescrapten Orte automatisch aufgelöst), und ein CSV-Partnerimport mit eigenem Parser für Beratungsorganisationen. Ein Chatbot (POST /chat) hilft Nutzern, einen Bedarf in eigenen Worten zu formulieren, und ist bewusst auch für Gäste nutzbar, weil der Moment, in dem jemand um Hilfe bittet, oft genau der Moment ist, in dem er kein Konto anlegen will. Die Antwortstruktur macht Schutzmechanismen zu Pflichtfeldern statt zu optionalen Erweiterungen: jede Antwort trägt ein handoff (einen konkreten menschlichen nächsten Schritt), ein disclaimer ist bei Finanz-, Asyl- oder Gesundheitsthemen zwingend, und eine deterministische Keyword-Erkennung für Notfallnummern läuft vor jedem Modellaufruf — trifft sie, wird weder Datenbank noch Gemini befragt. Ein knownOnly()-Filter verwirft jede vom Modell zurückgegebene ID, die nicht wirklich existiert, was halluzinierte Empfehlungen strukturell ausschließt; fällt Gemini aus, übernimmt eine deterministische Keyword-Tabelle als Fallback. Spracheingabe liefert ein wortgetreues, unübersetztes Transkript zur Kontrolle vor dem Absenden — eine deutsche Übersetzung wäre genau das, was die Zielgruppe des Features nicht verifizieren könnte. Neue Konten landen in einem überspringbaren Onboarding-Wizard; preferencesSetAt wird auch beim Überspringen gesetzt, damit „bewusst nicht beantwortet” von „noch nie gefragt” unterscheidbar bleibt, und der Filterzustand lebt vollständig in der URL. Eine Sicherheitsdurchsicht deckte drei stille Fehler auf, die im Normalbetrieb nicht auffielen: eine falsch konfigurierte trust-proxy-Einstellung, die den IP-basierten Rate-Limiter hinter dem Reverse-Proxy für alle Nutzer in einen gemeinsamen Topf warf, nie aufgeräumte Temp-Dateien auf dem Fehlerpfad beim Datei-Upload, und clientseitige Fehlerbehandlung, die unterschiedliche API-Fehler zu einer nichtssagenden Meldung zusammenfasste. Die Anwendung läuft als Drei-Container-Docker-Compose-Stack (MongoDB ohne veröffentlichten Port, Client hinter nginx), automatisiert über GitHub Actions auf einem Self-Hosted-Runner bei jedem Push auf main.',
                },
                {
                    heading: 'Ergebnis',
                    body: 'Die Anwendung ist für den MVP-Umfang vollständig funktionsfähig und im produktiven Betrieb: Nutzer entdecken Aktivitäten, städtische Veranstaltungen und Beratungsangebote auf Karte und in nach Kategorie, Sprache, Zielgruppe und Preis gefilterten Listen, speichern sie in eine persönliche Bibliothek, die zugleich als Kalender dient, und Admin-kuratierte Beratungsstellen liefern Öffnungszeiten, bevorzugte Kontaktwege und herunterladbare Antragsdokumente über zeitlich begrenzte, presignte S3-Links. Der Chatbot bietet Gästen wie eingeloggten Nutzern einen konversationellen Einstieg per Text oder Stimme, mit strukturellen Schutzmechanismen gegen Falschempfehlungen und einer 90-Tage-Aufbewahrung des Verlaufs für eingeloggte Nutzer. Eine 80 Tests umfassende Suite auf Node.js’ eingebautem Testrunner deckt genau die Stellen ab, an denen eine stille Regression teuer wäre: Filterkomposition, Kategorie-Mapping, geschlossene Vokabulare, Chat-Guardrails, Import-/Scrape-Parsing und Kalendermathematik. Offen und bewusst nicht verborgen sind: Gemini läuft noch im kostenlosen Kontingent, was vor echten Nutzern wegen möglicher besonderer Kategorien personenbezogener Daten (Art. 9 DSGVO) auf ein bezahltes Tier umgestellt werden muss; die Datenschutzerklärung liegt als juristisch ungeprüfter Entwurf vor; Feedback-Einträge landen aktuell nur in der Datenbank ohne Zustellweg; und MongoDB läuft ohne Authentifizierung, was nur durch den nicht veröffentlichten Port und den nicht öffentlich erreichbaren Host vertretbar ist.',
                },
                {
                    heading: 'Fazit & Lessons Learned',
                    body: 'Node.js’ eingebauter Testrunner erwies sich für ein Projekt dieser Größe als ausreichend — kein zusätzliches Framework, keine zusätzliche Konfigurationsebene. Wiederkehrende Muster wie das native <dialog>-Element für Filter-Panel und Chat-Modal sparten eine eigene Modal-Bibliothek, und ein Theme-Switch ganz ohne React-Context (das DOM selbst als State, gesetzt per Inline-Script gegen Flash-of-Unstyled-Content) zeigte, dass nicht jeder globale Zustand einen Context braucht. Die größte Lektion kam aus der Sicherheitsdurchsicht: Die trust-proxy-Fehlkonfiguration lief lange unbemerkt mit, weil sie erst unter Mehrnutzer-Last sichtbar wird — ein Hinweis darauf, dass Rate-Limiting und ähnliche Infrastruktur-Middleware explizite Tests brauchen, nicht nur einen Blick auf den Code. Für wachsende Nutzerzahlen wäre der nächste Schritt, die Gemini-Anbindung auf ein kostenpflichtiges Kontingent mit echtem Kostendeckel umzustellen, ein zentrales Env-Validierungsmodul einzuführen, das fehlende S3- oder Gemini-Zugangsdaten beim Start statt beim ersten Upload meldet, und die Geocoding-Trefferquote durch bessere Fallback-Suchanfragen statt durch mehr Code zu verbessern.',
                },
            ],
        },
        es: {
            title: 'KSoKo – Brújula Social',
            summary:
                'Una brújula social de bajo umbral para Kassel: eventos municipales, actividades y servicios de asesoramiento en un mapa y en listas filtrables, guardables en una biblioteca personal que funciona a la vez como calendario. Tres canalizaciones de datos independientes (scraper diario, relleno de geocodificación con Nominatim, importación CSV de socios) alimentan una única API de lectura, además de un chatbot utilizable también por invitados con salvaguardas estructurales contra recomendaciones alucinadas.',
            sections: [
                {
                    heading: 'Situación',
                    body: 'En Kassel y en ciudades comparables, el conocimiento sobre ofertas familiares asequibles y servicios sociales de asesoramiento está disperso. Asesoramiento de deudas, ayuda contra adicciones, apoyo familiar, asesoramiento en asilo, oficinas públicas: repartidos en decenas de páginas individuales, portales municipales y PDFs. Precisamente las personas que más urgentemente necesitan esta información, familias y hogares en desventaja económica, son las que menos tiempo y conocimiento institucional tienen para reunirla. No existía una única superficie de bajo umbral que conectara «qué está pasando» (eventos, actividades) con «quién ayuda» (servicios de asesoramiento), y mucho menos una que permitiera guardar ambos en un calendario personal.',
                },
                {
                    heading: 'Tarea',
                    body: 'El objetivo era una aplicación web, empezando por Kassel como ciudad piloto, que hiciera accesibles eventos y servicios de asesoramiento en un mapa y en listas filtrables, permitiera guardarlos en una biblioteca personal y un calendario, y ofreciera datos del proveedor como horarios de apertura, dirección y teléfono sin muro de pago ni fricción de ticketing. Los no-objetivos definieron la tarea casi tanto como los objetivos: nada de un «segundo Eventim» con enfoque comercial, ninguna interfaz fríamente burocrática — la aplicación tenía que resultar cálida y accesible. Técnicamente, la tarea consistía en diseñar un modelo de datos y una arquitectura que uniera tres fuentes de datos radicalmente distintas — actividades creadas manualmente, un calendario municipal de eventos obtenido por scraping y datos de asesoramiento aportados por socios — en una API de lectura consistente, sin duplicar lógica por tipo de contenido.',
                },
                {
                    heading: 'Acción',
                    body: 'El sistema es una arquitectura MERN clásica de tres capas (Express 5, MongoDB/Mongoose 9, React 19 + TypeScript, Node.js) en la que una canalización de scraping/importación funciona junto a la API como productor de datos independiente y asíncrono, en lugar de formar parte de la ruta de petición. El cliente habla exclusivamente con la API de Express — nunca directamente con MongoDB, Cloudinary, S3 o Gemini —, de modo que la autorización, la validación (Zod) y el rate limiting se aplican en un único punto. En el modelo de datos, los tres tipos de contenido Activity, ScrapedEvent y Beratung se mantuvieron deliberadamente como modelos Mongoose independientes en lugar de una colección base común: comparten demasiado pocos campos como para justificar la herencia. Se unifican en cambio en la frontera de la API: GET /events fusiona Activity y ScrapedEvent en una lista ordenada por fecha, y un único modelo polimórfico Favorite (itemType + itemId mediante refPath de Mongoose, índice único compuesto) hace los tres igualmente guardables — un elemento guardado con fecha es así directamente la entrada de calendario, y un modelo Appointment separado se omitió a propósito. Las categorías funcionan como una lista blanca validada en lugar de claves foráneas, para que el filtrado siga siendo una simple consulta $in en vez de un populate() en cada controlador. Los geodatos son campo obligatorio en Activity y Beratung (GeoJSON Point con índice 2dsphere); en ScrapedEvent, donde la ciudad solo entrega el nombre del lugar como texto, la coordenada se completa de forma asíncrona mediante Nominatim. La autenticación usa un token de acceso JWT de vida corta (15 minutos, solo en memoria del cliente, nunca en localStorage) junto con una cookie httpOnly de refresh token rotatoria (7 días); cada refresh token pertenece a una familia, y reutilizar un token ya rotado revoca de inmediato toda la familia, la protección estándar contra un refresh token robado pero usado con retraso. Las contraseñas se cifran con bcrypt, los roles (user/creator/admin) pasan por una factoría de middleware requireRole(...) más un isDocOwner(Model) genérico para reglas de propietario-o-admin; los datos de los servicios de asesoramiento están deliberadamente restringidos a escritura adminOnly en lugar del rol creator más laxo usado para las actividades, porque un dato erróneo sobre un servicio de asesoramiento de deudas conlleva un riesgo distinto al de un evento erróneo. En el lado de los datos, tres canalizaciones independientes alimentan la misma superficie de lectura: un scraper cron diario contra el calendario municipal de eventos con upsert idempotente sobre externalId, un relleno de geocodificación contra Nominatim (actualmente alrededor del 60 % de los cerca de 3.180 lugares obtenidos por scraping se resuelven automáticamente) y una importación CSV de socios con su propio parser para organizaciones de asesoramiento. Un chatbot (POST /chat) ayuda a los usuarios a formular una necesidad con sus propias palabras y es deliberadamente utilizable también por invitados, porque el momento en que alguien pide ayuda suele ser exactamente el momento en que no quiere crear una cuenta. La estructura de respuesta convierte las salvaguardas en campos obligatorios en lugar de extensiones opcionales: cada respuesta lleva un handoff (un siguiente paso humano concreto), un disclaimer es obligatorio en temas financieros, de asilo o de salud, y una detección determinista de palabras clave para números de emergencia se ejecuta antes de cada llamada al modelo — si coincide, no se consulta ni la base de datos ni Gemini. Un filtro knownOnly() descarta cualquier ID devuelta por el modelo que no exista realmente, lo que excluye estructuralmente las recomendaciones alucinadas; si Gemini falla, una tabla determinista de palabras clave actúa como respaldo. La entrada por voz devuelve una transcripción literal y sin traducir para revisarla antes de enviarla — una traducción al alemán sería exactamente lo que el público objetivo de la función no podría verificar. Las cuentas nuevas aterrizan en un asistente de onboarding omitible; preferencesSetAt se fija también al omitirlo, para que «deliberadamente sin responder» siga siendo distinguible de «nunca preguntado», y el estado de los filtros vive por completo en la URL. Una revisión de seguridad destapó tres fallos silenciosos que no se notaban en funcionamiento normal: una configuración errónea de trust proxy que metía a todos los usuarios en un mismo saco para el rate limiter basado en IP detrás del proxy inverso, archivos temporales nunca limpiados en la ruta de error durante la subida de archivos, y un manejo de errores en cliente que reducía distintos errores de API a un único mensaje sin significado. La aplicación funciona como un stack Docker Compose de tres contenedores (MongoDB sin puerto publicado, cliente detrás de nginx), automatizado con GitHub Actions en un runner autoalojado en cada push a main.',
                },
                {
                    heading: 'Resultado',
                    body: 'La aplicación es plenamente funcional para el alcance del MVP y está en funcionamiento productivo: los usuarios descubren actividades, eventos municipales y servicios de asesoramiento en el mapa y en listas filtradas por categoría, idioma, público objetivo y precio, los guardan en una biblioteca personal que sirve a la vez de calendario, y los servicios de asesoramiento curados por administradores ofrecen horarios de apertura, vías de contacto preferidas y documentos de solicitud descargables mediante enlaces S3 prefirmados de duración limitada. El chatbot ofrece tanto a invitados como a usuarios registrados un punto de entrada conversacional por texto o voz, con salvaguardas estructurales contra recomendaciones erróneas y una retención del historial de 90 días para usuarios registrados. Una suite de 80 tests sobre el ejecutor de pruebas integrado de Node.js cubre exactamente los puntos donde una regresión silenciosa sería cara: composición de filtros, mapeo de categorías, vocabularios cerrados, guardrails del chat, parsing de importación/scraping y matemática de calendario. Abierto y deliberadamente no ocultado: Gemini todavía funciona en el nivel gratuito, lo que debe cambiarse a un nivel de pago antes de tener usuarios reales por las posibles categorías especiales de datos personales (art. 9 RGPD); la política de privacidad existe como borrador sin revisión jurídica; las entradas de feedback actualmente solo llegan a la base de datos sin vía de entrega; y MongoDB funciona sin autenticación, algo solo defendible porque el puerto no está publicado y el host no es accesible públicamente.',
                },
                {
                    heading: 'Conclusiones clave',
                    body: 'El ejecutor de pruebas integrado de Node.js resultó suficiente para un proyecto de este tamaño: ningún framework adicional, ninguna capa de configuración adicional. Patrones recurrentes como el elemento nativo <dialog> para el panel de filtros y el modal del chat ahorraron una librería de modales propia, y un cambio de tema sin ningún contexto de React (el propio DOM como estado, fijado mediante un script inline contra el flash of unstyled content) mostró que no todo estado global necesita un contexto. La mayor lección vino de la revisión de seguridad: la configuración errónea de trust proxy pasó desapercibida durante mucho tiempo porque solo se hace visible bajo carga multiusuario — una señal de que el rate limiting y middleware de infraestructura similar necesitan tests explícitos, no solo una mirada al código. Para un número creciente de usuarios, los siguientes pasos serían pasar la integración de Gemini a una cuota de pago con un tope de coste real, introducir un módulo central de validación de entorno que informe de credenciales de S3 o Gemini ausentes al arrancar en lugar de en la primera subida, y mejorar la tasa de acierto de la geocodificación mediante mejores consultas de respaldo en vez de mediante más código.',
                },
            ],
        },
    },
};
