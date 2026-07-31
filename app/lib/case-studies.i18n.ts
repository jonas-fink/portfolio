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
                    heading: 'Problem',
                    body:
                        'Da ich selbst in diesem Bereich gearbeitet habe, sah ich, wie viele ' +
                        'Organisationen sich ihre Verwaltung aus einer Handvoll unverbundener Tools ' +
                        'zusammenstückeln. Die täglichen Abläufe reiben sich an ständiger Reibung: Es ' +
                        'gibt keine Transparenz darüber, wer tatsächlich wie viel Last trägt, und ' +
                        'vermeidbare Fehler schleichen sich ein, weil – selbst 2026 – Listen noch immer ' +
                        'von Hand abgeglichen werden.',
                },
                {
                    heading: 'Lösung',
                    body:
                        'Eine einzige, rollenbasierte Plattform ersetzt die verstreuten Tools. Eine ' +
                        'Oberfläche rendert für jede Rolle den passenden Arbeitsbereich: Fachkräfte sehen ' +
                        'ihre zugewiesenen Familien, protokollieren Termine, laden Berichte hoch, erfassen ' +
                        'Arbeitszeit und beantragen Urlaub, während Admins Fallzahl, Arbeitszeit und ' +
                        'Auslastung über das gesamte Team hinweg im Blick behalten. Ring-Diagramme machen ' +
                        'die tatsächliche Last jeder Person auf einen Blick sichtbar und beenden den ' +
                        'manuellen Listenabgleich. Ein gemeinsamer Wochenplaner führt Klient:innen-Termine ' +
                        'und interne Ereignisse wie Teamsitzungen zusammen, bei denen Admins und Fachkräfte ' +
                        'gemeinsame Einladungen versenden, verfügbare Kolleg:innen auswählen und über eine ' +
                        'In-App-Benachrichtigungsglocke zu- oder absagen. Derselbe Antrags- und ' +
                        'Genehmigungsablauf deckt Urlaub, Überstundenabbau und Krankmeldungen ab.',
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
                    heading: 'Problema',
                    body:
                        'Habiendo trabajado yo mismo en este campo, vi cómo muchas organizaciones ' +
                        'improvisan su administración uniendo un puñado de herramientas desconectadas. ' +
                        'Los procesos diarios chocan con una fricción constante: no hay transparencia ' +
                        'sobre quién carga realmente cuánto trabajo, y se cuelan errores evitables porque ' +
                        '—incluso en 2026— la gente sigue cuadrando listas a mano.',
                },
                {
                    heading: 'Solución',
                    body:
                        'Una única plataforma basada en roles reemplaza las herramientas dispersas. Una ' +
                        'sola interfaz muestra el espacio de trabajo adecuado para cada rol: los ' +
                        'trabajadores sociales ven las familias que tienen asignadas, registran citas, ' +
                        'suben informes, controlan su jornada y solicitan vacaciones, mientras que los ' +
                        'administradores supervisan la carga de casos, la jornada y la carga de trabajo de ' +
                        'todo el equipo. Los gráficos de anillo hacen visible de un vistazo la carga real ' +
                        'de cada persona, acabando con el cuadre manual de listas. Un planificador semanal ' +
                        'compartido combina las citas de clientes con eventos internos como reuniones de ' +
                        'equipo, donde tanto administradores como trabajadores sociales envían invitaciones ' +
                        'conjuntas, eligen a los colegas disponibles y confirman su asistencia mediante una ' +
                        'campana de notificaciones dentro de la app. El mismo flujo de solicitud y ' +
                        'aprobación cubre vacaciones, reducción de horas extra y bajas por enfermedad.',
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
                    heading: 'Problem',
                    body:
                        'Die meisten Health-Apps trennen das Tracking in Silos: eine App fürs Essen, eine ' +
                        'andere für die Stimmung, eine dritte für Bewegung – und keine zeigt, wie diese drei ' +
                        'über ein 12-Wochen-Programm hinweg tatsächlich zusammenwirken. Hinzu kommt: ' +
                        'Ernährungsdaten sind notorisch unzuverlässig – keine einzelne Lebensmittel-Datenbank ' +
                        'hat gute Abdeckung, Barcodes fehlen, und die Portionsskalierung ist leicht subtil ' +
                        'falsch. Ich wollte eine App, die Ernährung, Stimmung und Bewegung zusammenhält – ' +
                        'vertrauenswürdig genug, um ein echtes Coaching-Programm darauf aufzubauen.',
                },
                {
                    heading: 'Lösung',
                    body:
                        'Eine React-19-App mit TypeScript, gestützt auf eine Express/MongoDB-API. ' +
                        'Lebensmittel-Abfragen kaskadieren über FatSecret, USDA und OpenFoodFacts, sodass ' +
                        'die Abdeckung auch dort hält, wo eine einzelne Quelle versagt, mit einem ' +
                        'react-zxing-Barcode-Scanner und einem gemeinsamen Portionsskalierungs-Helfer, der ' +
                        'über Suche, Favoriten und Scans hinweg wiederverwendet wird – keine driftende, ' +
                        'duplizierte Rechenlogik. Ein Recharts-Dashboard bringt Gewicht, Maße, Stimmung, ' +
                        'Kalorien und Aktivität auf dieselbe Zeitachse. Die JWT-Authentifizierung nutzt ' +
                        'In-Memory-Access-Tokens mit stillem httpOnly-Cookie-Refresh, Stripe Checkout ' +
                        'steuert den vierstufigen Abo-Flow hinter einem Feature-Flag, und ein ' +
                        'rollengeschütztes Admin-Dashboard zeigt Insights pro Nutzer:in, MRR/ARPU und ' +
                        'Abo-Gesundheit.',
                },
                {
                    heading: 'Technische Notizen',
                    body:
                        'Die Codebasis ist um Dedupe-Nahtstellen herum gebaut, statt um Abstraktionen um ' +
                        'ihrer selbst willen: Portionsskalierung, Mahlzeitentypen, Plan-Stufen und die ' +
                        'Dashboard-Sektions-Chrome leben jeweils an genau einer Stelle. Wenn Seiten über ' +
                        '~500 Zeilen wuchsen, habe ich Logik in Hooks gezogen und die UI aufgeteilt – die ' +
                        'Food-Diary-Seite ging via vier Hooks und vier Komponenten von 991 auf 278 Zeilen ' +
                        'zurück. Das Admin-Bundle ist per React.lazy abgetrennt, sodass normale Nutzer:innen ' +
                        'seine Kosten nie tragen, und die Stripe-CTAs stehen hinter einem Env-Flag, sodass ' +
                        'die Produktion einen sauberen „Coming soon“-Zustand ausliefert, ohne den Build zu ' +
                        'brechen.',
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
                    heading: 'Problema',
                    body:
                        'La mayoría de las apps de salud separan el seguimiento en silos: una app para la ' +
                        'comida, otra para el ánimo, una tercera para la actividad —y ninguna muestra cómo ' +
                        'las tres interactúan realmente a lo largo de un programa de 12 semanas. Además, los ' +
                        'datos nutricionales son notoriamente poco fiables: ninguna base de datos de ' +
                        'alimentos tiene buena cobertura, los códigos de barras fallan y escalar las ' +
                        'porciones es fácil de equivocar de forma sutil. Quería una sola app que mantuviera ' +
                        'juntos nutrición, ánimo y actividad, lo bastante fiable como para basar en ella un ' +
                        'programa de coaching real.',
                },
                {
                    heading: 'Solución',
                    body:
                        'Una app en React 19 + TypeScript respaldada por una API de Express/MongoDB. Las ' +
                        'búsquedas de alimentos van en cascada por FatSecret, USDA y OpenFoodFacts para que ' +
                        'la cobertura se mantenga donde una sola fuente se queda corta, con un escáner de ' +
                        'códigos de barras react-zxing y un único ayudante de escalado de porciones ' +
                        'reutilizado en búsqueda, favoritos y escaneos —sin cálculos duplicados que se ' +
                        'desvíen. Un panel con Recharts pone peso, medidas, ánimo, calorías y actividad en ' +
                        'la misma línea de tiempo. La autenticación JWT usa tokens de acceso en memoria con ' +
                        'refresco silencioso mediante cookie httpOnly, Stripe Checkout ejecuta el flujo de ' +
                        'suscripción de cuatro niveles tras un feature flag, y un panel de administración ' +
                        'con acceso por rol ofrece análisis por usuario, MRR/ARPU y salud de las ' +
                        'suscripciones.',
                },
                {
                    heading: 'Notas técnicas',
                    body:
                        'La base de código está construida en torno a puntos de deduplicación en lugar de ' +
                        'abstracciones por sí mismas: el escalado de porciones, los tipos de comida, los ' +
                        'niveles de plan y el marco de las secciones del panel viven cada uno en un único ' +
                        'lugar. Cuando las páginas superaban las ~500 líneas, extraje la lógica a hooks y ' +
                        'dividí la UI —la página del diario de comidas pasó de 991 a 278 líneas mediante ' +
                        'cuatro hooks y cuatro componentes. El bundle de administración se separa con ' +
                        'React.lazy para que los usuarios normales nunca paguen su coste, y los CTA de ' +
                        'Stripe están tras un flag de entorno para que producción despliegue un estado ' +
                        'limpio de «próximamente» sin romper el build.',
                },
            ],
        },
    },
};
