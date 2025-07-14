// Crear imágenes placeholder temporales usando un generador de imágenes
// Estas serán reemplazadas por imágenes reales más adelante

// Función para crear URLs de imágenes placeholder
function createPlaceholderImage(width: number, height: number, category: string, bgColor: string): string {
  return `https://via.placeholder.com/${width}x${height}/${bgColor.replace('#', '')}/ffffff?text=${encodeURIComponent(category)}`;
}

// Configuración de imágenes por categoría
export const imageConfig = {
  Principiantes: {
    color: '#3B82F6', // Azul
    placeholder: createPlaceholderImage(400, 240, 'Principiantes', '#3B82F6')
  },
  Educación: {
    color: '#10B981', // Verde
    placeholder: createPlaceholderImage(400, 240, 'Educación', '#10B981')
  },
  Estrategias: {
    color: '#8B5CF6', // Púrpura
    placeholder: createPlaceholderImage(400, 240, 'Estrategias', '#8B5CF6')
  }
};

// Función para obtener imagen por categoría
export function getImageByCategory(category: string): string {
  return imageConfig[category as keyof typeof imageConfig]?.placeholder || imageConfig.Principiantes.placeholder;
}
