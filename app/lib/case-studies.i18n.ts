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
    'fink-dev': {
        de: {
            summary:
                'Dieses Portfolio, gebaut als lebendiges Design-System mit Next.js 16 und Tailwind v4 statt als statisches Template. Jede visuelle Entscheidung – Farbe, Typografie, Abstände – ist ein Token, sodass sich die gesamte Seite zur Laufzeit neu gestalten lässt, ohne eine einzige Komponente anzufassen.',
            sections: [
                {
                    heading: 'Problem',
                    body: 'Ich wollte ein Portfolio, das zugleich als lebendiges Design-System dient und nicht als einmaliges Template. Das bedeutete: keine fest verdrahteten Farben oder Schriften über die Komponenten verstreut, und ein Setup, bei dem sich das Aussehen der gesamten Seite durch das Ändern einer Handvoll Werte an einer Stelle anpassen lässt.',
                },
                {
                    heading: 'Lösung',
                    body: 'Ich habe ein Token-getriebenes Tailwind-v4-Setup gebaut, in dem Akzentfarbe, Schrift und das Light-/Dark-Theme alle als CSS-Variablen definiert sind. Weil diese Variablen zur Laufzeit gelesen werden, kann die Seite ihr gesamtes Erscheinungsbild sofort im Browser wechseln – ohne Rebuild, ohne Neuladen und ohne duplizierten Theme-Code.',
                },
            ],
        },
        es: {
            summary:
                'Este portfolio, construido como un design system vivo con Next.js 16 y Tailwind v4 en lugar de una plantilla estática. Cada decisión visual —color, tipografía, espaciado— es un token, de modo que todo el sitio puede re-tematizarse en tiempo de ejecución sin tocar un solo componente.',
            sections: [
                {
                    heading: 'Problema',
                    body: 'Quería un portfolio que funcionara también como un design system vivo, y no como una plantilla de un solo uso. Eso significaba nada de colores o fuentes fijos dispersos por los componentes, y una configuración en la que cambiar el aspecto de todo el sitio se redujera a editar un puñado de valores en un único lugar.',
                },
                {
                    heading: 'Solución',
                    body: 'Construí una configuración de Tailwind v4 basada en tokens, donde el color de acento, la fuente y el tema claro/oscuro se definen todos como variables CSS. Como esas variables se leen en tiempo de ejecución, el sitio puede cambiar toda su apariencia al instante en el navegador —sin recompilar, sin recargar la página y sin código de tema duplicado.',
                },
            ],
        },
    },
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
                        'Guards – eine Fachkraft darf die Kontaktdaten ihrer Familie ändern, nicht aber ' +
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
};
