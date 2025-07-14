// Importar imágenes del blog
import img100Dolares from '../assets/images/blog/como-empezar-invertir-100-dolares.jpg';
import imgETFs from '../assets/images/blog/etfs-vs-acciones-individuales.jpg';

// Importar imágenes placeholder
import imgPlaceholderPrincipiantes from '../assets/images/blog/placeholder-principiantes.svg';
import imgPlaceholderEducacion from '../assets/images/blog/placeholder-educacion.svg';
import imgPlaceholderEstrategias from '../assets/images/blog/placeholder-estrategias.svg';

// Usar las imágenes existentes de manera más apropiada
const imgPrincipiantes = img100Dolares; // Para posts de principiantes
const imgEducacion = imgPlaceholderEducacion; // Para posts de educación  
const imgEstrategias = imgETFs; // Para posts de estrategias

export interface BlogPost {
  id: number;
  slug: string;
  title: string;        // Meta título optimizado para SEO (máx 65 chars)
  h1: string;          // H1 visible en la página (puede ser más descriptivo)
  description: string;
  image: any;
  date: string;
  category: string;
  readTime: string;
  content?: string;
  excerpt?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'como-empezar-invertir-100-dolares',
    title: 'Cómo Empezar a Invertir con $100 - Invierto Ya',
    h1: 'Cómo Empezar a Invertir con $100 en 2025: Guía Completa para Principiantes',
    description: 'Descubre las mejores opciones para comenzar tu viaje de inversión con un presupuesto pequeño. Guía paso a paso para principiantes.',
    excerpt: 'Descubre las mejores opciones para comenzar tu viaje de inversión con un presupuesto pequeño.',
    image: imgPrincipiantes,
    date: '2025-01-10',
    category: 'Principiantes',
    readTime: '5 min',
    content: `
      <h2>¿Es posible empezar a invertir con solo $100?</h2>
      <p>¡Absolutamente sí! Uno de los mitos más grandes sobre las inversiones es que necesitas miles de dólares para empezar. En 2025, existen múltiples plataformas y estrategias que te permiten comenzar con tan solo $100.</p>
      
      <h3>1. Fondos Cotizados (ETFs)</h3>
      <p>Los ETFs son una excelente opción para principiantes porque:</p>
      <ul>
        <li>Diversificación instantánea</li>
        <li>Costos bajos</li>
        <li>Acceso a mercados globales</li>
        <li>Gestión profesional</li>
      </ul>

      <h3>2. Plataformas de Micro-Inversión</h3>
      <p>Aplicaciones como Acorns, Stash o Robinhood permiten:</p>
      <ul>
        <li>Inversiones desde $1</li>
        <li>Automatización de inversiones</li>
        <li>Educación financiera integrada</li>
      </ul>

      <h3>3. Plan de Acción Paso a Paso</h3>
      <ol>
        <li><strong>Define tus objetivos:</strong> ¿Para qué quieres invertir?</li>
        <li><strong>Elige tu plataforma:</strong> Investiga comisiones y opciones</li>
        <li><strong>Comienza con ETFs diversificados:</strong> S&P 500 o mercados globales</li>
        <li><strong>Invierte regularmente:</strong> $25 semanales pueden hacer la diferencia</li>
        <li><strong>Edúcate continuamente:</strong> Lee, aprende y mejora</li>
      </ol>

      <h3>Conclusión</h3>
      <p>Empezar con $100 no solo es posible, sino recomendable. Lo importante no es la cantidad inicial, sino desarrollar el hábito de invertir regularmente y educarte en el proceso.</p>
    `
  },
  {
    id: 2,
    slug: 'etfs-vs-acciones-individuales',
    title: 'ETFs vs Acciones Individuales - Invierto Ya',
    h1: 'ETFs vs Acciones Individuales: ¿Qué Conviene Más para tu Portfolio?',
    description: 'Análisis completo de las ventajas y desventajas de invertir en ETFs versus acciones individuales. Guía para tomar la mejor decisión.',
    excerpt: 'Análisis completo de las ventajas y desventajas de cada opción de inversión.',
    image: imgEstrategias,
    date: '2025-01-08',
    category: 'Estrategias',
    readTime: '8 min',
    content: `
      <h2>La Gran Pregunta del Inversor</h2>
      <p>Una de las decisiones más importantes que enfrenta todo inversor es: ¿invierto en ETFs o en acciones individuales? Ambas opciones tienen sus ventajas y la respuesta depende de tu perfil, objetivos y nivel de experiencia.</p>
      
      <h3>ETFs: Diversificación Instantánea</h3>
      <h4>Ventajas:</h4>
      <ul>
        <li><strong>Diversificación automática:</strong> Un solo ETF puede contener cientos de acciones</li>
        <li><strong>Menor riesgo:</strong> El riesgo se distribuye entre múltiples empresas</li>
        <li><strong>Gestión profesional:</strong> Expertos seleccionan y balancean las inversiones</li>
        <li><strong>Costos bajos:</strong> Comisiones de gestión típicamente menores al 0.5%</li>
        <li><strong>Menos tiempo requerido:</strong> No necesitas analizar empresas individuales</li>
      </ul>

      <h4>Desventajas:</h4>
      <ul>
        <li><strong>Retornos limitados:</strong> Seguirás el promedio del mercado</li>
        <li><strong>Menos control:</strong> No puedes elegir empresas específicas</li>
        <li><strong>Comisiones anuales:</strong> Aunque bajas, se pagan independientemente del rendimiento</li>
      </ul>

      <h3>Acciones Individuales: Control Total</h3>
      <h4>Ventajas:</h4>
      <ul>
        <li><strong>Potencial de mayores retornos:</strong> Una buena selección puede superar al mercado</li>
        <li><strong>Control total:</strong> Tú decides exactamente dónde invertir</li>
        <li><strong>Sin comisiones de gestión:</strong> Solo pagas al comprar/vender</li>
        <li><strong>Dividendos directos:</strong> Recibes dividendos de empresas específicas</li>
      </ul>

      <h4>Desventajas:</h4>
      <ul>
        <li><strong>Mayor riesgo:</strong> El fracaso de una empresa puede afectar significativamente tu portfolio</li>
        <li><strong>Requiere más conocimiento:</strong> Necesitas analizar estados financieros, mercados, etc.</li>
        <li><strong>Más tiempo intensivo:</strong> Investigación constante y seguimiento</li>
        <li><strong>Emociones:</strong> Es fácil dejarse llevar por el miedo o la codicia</li>
      </ul>

      <h3>¿Cuál Elegir? Depende de Tu Perfil</h3>
      
      <h4>Elige ETFs si:</h4>
      <ul>
        <li>Eres principiante en inversiones</li>
        <li>Tienes poco tiempo para investigar</li>
        <li>Prefieres un enfoque "set and forget"</li>
        <li>Quieres minimizar riesgos</li>
        <li>Buscas diversificación automática</li>
      </ul>

      <h4>Elige Acciones Individuales si:</h4>
      <ul>
        <li>Tienes conocimiento financiero sólido</li>
        <li>Disfrutas investigar empresas</li>
        <li>Tienes tiempo para seguimiento activo</li>
        <li>Buscas superar los retornos del mercado</li>
        <li>Puedes manejar mayor volatilidad</li>
      </ul>

      <h3>La Estrategia Híbrida (Recomendada)</h3>
      <p>Para la mayoría de inversores, la mejor estrategia es una combinación:</p>
      <ul>
        <li><strong>70-80% en ETFs:</strong> Base sólida y diversificada</li>
        <li><strong>20-30% en acciones individuales:</strong> Para explorar y potencialmente superar al mercado</li>
      </ul>

      <h3>Conclusión</h3>
      <p>No hay una respuesta única. Lo importante es entender tu perfil de riesgo, objetivos y nivel de compromiso. Muchos inversores exitosos combinan ambas estrategias para obtener lo mejor de ambos mundos.</p>
    `
  },
  {
    id: 3,
    slug: 'errores-comunes-al-invertir',
    title: 'Los 5 Errores al Invertir - Invierto Ya',
    h1: 'Los 5 Errores Más Comunes al Invertir y Cómo Evitarlos',
    description: 'Aprende de los errores más frecuentes que cometen los inversores y cómo evitarlos para proteger tu dinero y maximizar tus retornos.',
    excerpt: 'Aprende de los errores más frecuentes y cómo evitarlos en tus inversiones.',
    image: imgEducacion,
    date: '2025-01-05',
    category: 'Educación',
    readTime: '6 min',
    content: `
      <h2>Errores Que Pueden Costar Caro</h2>
      <p>Invertir puede ser extremadamente rentable, pero también puede ser costoso si cometes errores comunes. Aquí te muestro los 5 errores más frecuentes y cómo evitarlos.</p>
      
      <h3>1. No Diversificar Tu Portfolio</h3>
      <p>Muchos inversores principiantes cometen el error de "poner todos los huevos en la misma canasta".</p>
      <h4>El problema:</h4>
      <ul>
        <li>Si una sola inversión falla, puedes perder una gran parte de tu dinero</li>
        <li>Exposición excesiva a un solo sector o empresa</li>
        <li>Mayor volatilidad en tu portfolio</li>
      </ul>
      
      <h4>La solución:</h4>
      <ul>
        <li>Invierte en diferentes sectores y geografías</li>
        <li>Combina acciones, bonos y ETFs</li>
        <li>Considera inversiones en bienes raíces o commodities</li>
      </ul>

      <h3>2. Dejarse Llevar por las Emociones</h3>
      <p>El miedo y la codicia son los peores enemigos del inversor.</p>
      <h4>Señales de alarma:</h4>
      <ul>
        <li>Vender en pánico durante las caídas del mercado</li>
        <li>Comprar en los máximos por FOMO (fear of missing out)</li>
        <li>Cambiar constantemente de estrategia</li>
      </ul>
      
      <h4>Cómo controlarlo:</h4>
      <ul>
        <li>Establece un plan de inversión y síguelo</li>
        <li>Usa órdenes stop-loss para limitar pérdidas</li>
        <li>Invierte regularmente (dollar-cost averaging)</li>
      </ul>

      <h3>3. No Educarse Antes de Invertir</h3>
      <p>Invertir sin conocimiento es como conducir con los ojos vendados.</p>
      <h4>Consecuencias:</h4>
      <ul>
        <li>Decisiones basadas en rumores o consejos no verificados</li>
        <li>No entender los riesgos de tus inversiones</li>
        <li>Caer en esquemas fraudulentos</li>
      </ul>
      
      <h4>Educación esencial:</h4>
      <ul>
        <li>Aprende conceptos básicos de finanzas</li>
        <li>Entiende cómo funciona el mercado</li>
        <li>Lee estados financieros básicos</li>
      </ul>

      <h3>4. Intentar Timing del Mercado</h3>
      <p>Intentar predecir los movimientos del mercado es una estrategia perdedora a largo plazo.</p>
      <h4>Por qué no funciona:</h4>
      <ul>
        <li>Ni los expertos pueden predecir consistentemente el mercado</li>
        <li>Pierdes días de alta rentabilidad</li>
        <li>Generas costos adicionales por transacciones frecuentes</li>
      </ul>
      
      <h4>Estrategia ganadora:</h4>
      <ul>
        <li>Invierte regularmente sin importar las condiciones del mercado</li>
        <li>Mantén una perspectiva a largo plazo</li>
        <li>Aprovecha las caídas para comprar más</li>
      </ul>

      <h3>5. No Tener Objetivos Claros</h3>
      <p>Invertir sin objetivos es como navegar sin brújula.</p>
      <h4>Problemas comunes:</h4>
      <ul>
        <li>No saber cuándo vender</li>
        <li>Elegir inversiones inadecuadas para tu situación</li>
        <li>Falta de disciplina y consistencia</li>
      </ul>
      
      <h4>Define tus objetivos:</h4>
      <ul>
        <li>¿Cuánto necesitas para tu jubilación?</li>
        <li>¿Cuál es tu horizonte temporal?</li>
        <li>¿Cuánto riesgo puedes tolerar?</li>
      </ul>

      <h3>Conclusión</h3>
      <p>Evitar estos errores comunes puede marcar la diferencia entre el éxito y el fracaso en tus inversiones. Recuerda: la paciencia, la educación y la disciplina son tus mejores aliados en el mundo de las inversiones.</p>
    `
  },
  {
    id: 4,
    slug: 'introduccion-bonos-inversion',
    title: 'Introducción a los Bonos - Invierto Ya',
    h1: 'Introducción a los Bonos: La Inversión Conservadora Que Debes Conocer',
    description: 'Todo lo que necesitas saber sobre bonos: qué son, cómo funcionan, tipos y por qué deberían formar parte de tu portfolio de inversión.',
    excerpt: 'Descubre por qué los bonos son una parte esencial de cualquier portfolio balanceado.',
    image: imgEducacion,
    date: '2025-01-03',
    category: 'Educación',
    readTime: '7 min',
    content: `
      <h2>¿Qué Son los Bonos?</h2>
      <p>Los bonos son instrumentos de deuda donde tú, como inversor, prestas dinero a una entidad (gobierno o empresa) a cambio de pagos periódicos de intereses y la devolución del capital al vencimiento.</p>
      
      <h3>Características Básicas</h3>
      <ul>
        <li><strong>Valor nominal:</strong> La cantidad que recibirás al vencimiento</li>
        <li><strong>Cupón:</strong> El interés que recibes periódicamente</li>
        <li><strong>Vencimiento:</strong> Cuándo se devuelve el capital</li>
        <li><strong>Yield:</strong> El rendimiento efectivo de tu inversión</li>
      </ul>

      <h3>Tipos de Bonos</h3>
      <h4>Bonos Gubernamentales:</h4>
      <ul>
        <li>Bonos del Tesoro (T-Bonds)</li>
        <li>Bonos municipales</li>
        <li>Bonos de países emergentes</li>
      </ul>

      <h4>Bonos Corporativos:</h4>
      <ul>
        <li>Investment grade (alta calidad)</li>
        <li>High yield (mayor riesgo, mayor retorno)</li>
        <li>Bonos convertibles</li>
      </ul>

      <h3>Ventajas de los Bonos</h3>
      <ul>
        <li><strong>Ingresos predecibles:</strong> Pagos regulares de intereses</li>
        <li><strong>Preservación de capital:</strong> Menor volatilidad que las acciones</li>
        <li><strong>Diversificación:</strong> Comportamiento diferente a las acciones</li>
        <li><strong>Liquidez:</strong> Fácil compra y venta en mercados secundarios</li>
      </ul>

      <h3>Riesgos a Considerar</h3>
      <ul>
        <li><strong>Riesgo de crédito:</strong> El emisor puede no cumplir con sus pagos</li>
        <li><strong>Riesgo de tasa de interés:</strong> Los precios cambian con las tasas</li>
        <li><strong>Riesgo de inflación:</strong> Los pagos fijos pierden poder adquisitivo</li>
        <li><strong>Riesgo de liquidez:</strong> Algunos bonos son difíciles de vender</li>
      </ul>

      <h3>Cómo Incluir Bonos en Tu Portfolio</h3>
      <p>Una regla general es tener un porcentaje de bonos igual a tu edad. Por ejemplo, si tienes 30 años, considera tener 30% en bonos y 70% en acciones.</p>

      <h4>Estrategias populares:</h4>
      <ul>
        <li><strong>Ladder de bonos:</strong> Comprar bonos con diferentes vencimientos</li>
        <li><strong>ETFs de bonos:</strong> Diversificación instantánea</li>
        <li><strong>Bonos individuales:</strong> Mayor control sobre vencimientos</li>
      </ul>

      <h3>Conclusión</h3>
      <p>Los bonos son una excelente manera de balancear tu portfolio, generar ingresos pasivos y reducir la volatilidad. No son tan emocionantes como las acciones, pero son fundamentales para una estrategia de inversión sólida.</p>
    `
  },
  {
    id: 5,
    slug: 'diversificacion-portfolio-basico',
    title: 'Diversificación de Portfolio - Invierto Ya',
    h1: 'Diversificación de Portfolio: Guía Completa para Principiantes',
    description: 'Aprende cómo diversificar tu portfolio de inversión para minimizar riesgos y maximizar retornos. Estrategias prácticas y ejemplos reales.',
    excerpt: 'La clave para reducir riesgos y crear un portfolio robusto que funcione en cualquier condición de mercado.',
    image: imgPrincipiantes,
    date: '2025-01-01',
    category: 'Principiantes',
    readTime: '6 min',
    content: `
      <h2>¿Por Qué Diversificar?</h2>
      <p>La diversificación es la única "comida gratis" en las inversiones. Te permite reducir el riesgo sin sacrificar retornos potenciales.</p>
      
      <h3>Principios Básicos</h3>
      <ul>
        <li><strong>No pongas todos los huevos en una canasta:</strong> Distribuye tu dinero</li>
        <li><strong>Correlación baja:</strong> Invierte en activos que se mueven de forma diferente</li>
        <li><strong>Rebalanceo regular:</strong> Mantén las proporciones objetivo</li>
      </ul>

      <h3>Tipos de Diversificación</h3>
      <h4>Por Clase de Activo:</h4>
      <ul>
        <li>Acciones (crecimiento)</li>
        <li>Bonos (estabilidad)</li>
        <li>Bienes raíces (inflación)</li>
        <li>Commodities (diversificación)</li>
      </ul>

      <h4>Por Geografía:</h4>
      <ul>
        <li>Mercados desarrollados (EE.UU., Europa)</li>
        <li>Mercados emergentes (Asia, América Latina)</li>
        <li>Mercados de frontera (mayor riesgo/retorno)</li>
      </ul>

      <h3>Portfolio Modelo para Principiantes</h3>
      <h4>Opción Conservadora (Edad 50+):</h4>
      <ul>
        <li>40% Acciones domésticas</li>
        <li>20% Acciones internacionales</li>
        <li>30% Bonos</li>
        <li>10% REITs/Commodities</li>
      </ul>

      <h4>Opción Moderada (Edad 30-50):</h4>
      <ul>
        <li>50% Acciones domésticas</li>
        <li>30% Acciones internacionales</li>
        <li>15% Bonos</li>
        <li>5% Alternativos</li>
      </ul>

      <h3>Implementación Práctica</h3>
      <h4>Con ETFs (Recomendado):</h4>
      <ul>
        <li>VTI (Total Stock Market)</li>
        <li>VTIAX (International)</li>
        <li>BND (Total Bond Market)</li>
        <li>VNQ (REITs)</li>
      </ul>

      <h3>Errores Comunes</h3>
      <ul>
        <li><strong>Sobre-diversificación:</strong> Demasiados fondos similares</li>
        <li><strong>Concentración oculta:</strong> Múltiples fondos con las mismas acciones</li>
        <li><strong>Ignorar costos:</strong> Los fees altos reducen retornos</li>
      </ul>

      <h3>Conclusión</h3>
      <p>La diversificación no garantiza ganancias, pero sí reduce significativamente el riesgo. Comienza simple y ajusta según tu experiencia y objetivos.</p>
    `
  },
  {
    id: 6,
    slug: 'analisis-tecnico-principiantes',
    title: 'Análisis Técnico para Principiantes - Invierto Ya',
    h1: 'Análisis Técnico para Principiantes: Interpretando Gráficos y Patrones',
    description: 'Introducción al análisis técnico: cómo leer gráficos, identificar patrones y usar indicadores para tomar mejores decisiones de inversión.',
    excerpt: 'Aprende a interpretar gráficos y patrones para mejorar tus decisiones de entrada y salida.',
    image: imgEstrategias,
    date: '2024-12-28',
    category: 'Estrategias',
    readTime: '9 min',
    content: `
      <h2>¿Qué es el Análisis Técnico?</h2>
      <p>El análisis técnico es el estudio de los movimientos de precios pasados para predecir movimientos futuros. Se basa en la premisa de que toda la información está reflejada en el precio.</p>
      
      <h3>Conceptos Fundamentales</h3>
      <ul>
        <li><strong>Soporte:</strong> Nivel donde el precio tiende a "rebotar" hacia arriba</li>
        <li><strong>Resistencia:</strong> Nivel donde el precio tiende a "rebotar" hacia abajo</li>
        <li><strong>Tendencia:</strong> Dirección general del precio (alcista, bajista, lateral)</li>
        <li><strong>Volumen:</strong> Cantidad de acciones negociadas</li>
      </ul>

      <h3>Tipos de Gráficos</h3>
      <h4>Gráfico de Líneas:</h4>
      <ul>
        <li>Más simple, muestra solo precios de cierre</li>
        <li>Útil para ver tendencias generales</li>
        <li>Menos información detallada</li>
      </ul>

      <h4>Gráfico de Barras:</h4>
      <ul>
        <li>Muestra apertura, máximo, mínimo y cierre</li>
        <li>Más información que el gráfico de líneas</li>
        <li>Útil para análisis más detallado</li>
      </ul>

      <h4>Gráfico de Velas (Recomendado):</h4>
      <ul>
        <li>Visualmente más intuitivo</li>
        <li>Fácil identificación de patrones</li>
        <li>Muestra la "psicología" del mercado</li>
      </ul>

      <h3>Indicadores Técnicos Básicos</h3>
      <h4>Medias Móviles:</h4>
      <ul>
        <li><strong>SMA (Media Móvil Simple):</strong> Promedio de precios en X períodos</li>
        <li><strong>EMA (Media Móvil Exponencial):</strong> Da más peso a precios recientes</li>
        <li><strong>Usos:</strong> Identificar tendencias y señales de compra/venta</li>
      </ul>

      <h4>RSI (Índice de Fuerza Relativa):</h4>
      <ul>
        <li>Oscila entre 0 y 100</li>
        <li>Sobre 70: Sobrecomprado (posible venta)</li>
        <li>Bajo 30: Sobrevendido (posible compra)</li>
      </ul>

      <h3>Patrones Comunes</h3>
      <h4>Patrones de Continuación:</h4>
      <ul>
        <li><strong>Triángulos:</strong> Consolidación antes de continuar tendencia</li>
        <li><strong>Banderas:</strong> Pausa breve en tendencia fuerte</li>
        <li><strong>Cuñas:</strong> Corrección temporal</li>
      </ul>

      <h4>Patrones de Reversión:</h4>
      <ul>
        <li><strong>Cabeza y Hombros:</strong> Indica fin de tendencia alcista</li>
        <li><strong>Doble Techo/Suelo:</strong> Confirmación de cambio de tendencia</li>
        <li><strong>Martillo/Doji:</strong> Indecisión del mercado</li>
      </ul>

      <h3>Estrategia Simple para Principiantes</h3>
      <ol>
        <li><strong>Identifica la tendencia:</strong> Usa medias móviles de 20 y 50 días</li>
        <li><strong>Busca niveles de soporte/resistencia:</strong> En gráficos diarios</li>
        <li><strong>Confirma con volumen:</strong> Movimientos con alto volumen son más confiables</li>
        <li><strong>Usa stop-loss:</strong> Protege tu capital con órdenes de venta automáticas</li>
        <li><strong>Practica con papel:</strong> Simula operaciones antes de invertir dinero real</li>
      </ol>

      <h3>Limitaciones del Análisis Técnico</h3>
      <ul>
        <li><strong>No es infalible:</strong> Los patrones pueden fallar</li>
        <li><strong>Retraso:</strong> Los indicadores confirman movimientos pasados</li>
        <li><strong>Subjetivo:</strong> Diferentes personas pueden interpretar diferente</li>
        <li><strong>Eventos externos:</strong> Noticias pueden cambiar todo</li>
      </ul>

      <h3>Conclusión</h3>
      <p>El análisis técnico es una herramienta útil, pero no debe ser tu única consideración. Combínalo con análisis fundamental y gestión adecuada del riesgo para mejorar tus inversiones.</p>
    `
  }
];

// Función para obtener todos los posts
export function getAllPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Función para obtener un post por slug
export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

// Función para obtener posts por categoría
export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts
    .filter(post => post.category === category)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Función para obtener todas las categorías
export function getAllCategories(): string[] {
  const categories = [...new Set(blogPosts.map(post => post.category))];
  return categories.sort();
}
