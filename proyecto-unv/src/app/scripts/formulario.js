
export const validateNombre = (nombre) => {
  if (!nombre || nombre.trim().length === 0) {
    return { isValid: false, message: 'El nombre es requerido' };
  }

  if (nombre.trim().length < 3) {
    return { isValid: false, message: 'El nombre debe tener al menos 3 caracteres' };
  }

  if (nombre.trim().length > 50) {
    return { isValid: false, message: 'El nombre no puede exceder 50 caracteres' };
  }

  return { isValid: true, message: '' };
};

export const validateEmail = (email) => {
  if (!email || email.trim().length === 0) {
    return { isValid: false, message: 'El correo electrónico es requerido' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    return { isValid: false, message: 'Ingrese un correo electrónico válido' };
  }

  if (email.trim().length > 100) {
    return { isValid: false, message: 'El correo electrónico no puede exceder 100 caracteres' };
  }

  return { isValid: true, message: '' };
};

 export const validateTelefono = (telefono) => {
   // El teléfono es opcional, si está vacío es válido
   if (!telefono || telefono.trim().length === 0) {
     return { isValid: true, message: '' };
   }
 
   // Formato aceptado: números, espacios, guiones, paréntesis y el símbolo +
   const telefonoRegex = /^[\d\s\(\)\-\+]+$/;
   if (!telefonoRegex.test(telefono.trim())) {
     return { isValid: false, message: 'El teléfono solo puede contener números y caracteres especiales (+, -, paréntesis)' };
   }
 
   // Eliminar caracteres no numéricos para verificar la longitud
   const numeros = telefono.replace(/\D/g, '');
   if (numeros.length < 7) {
     return { isValid: false, message: 'El teléfono debe tener al menos 7 dígitos' };
   }
 
   if (numeros.length > 15) {
     return { isValid: false, message: 'El teléfono no puede exceder 15 dígitos' };
   }
 
   return { isValid: true, message: '' };
 };

export const validateAsunto = (asunto) => {
  if (!asunto || asunto.trim().length === 0) {
    return { isValid: false, message: 'El asunto es requerido' };
  }

  if (asunto.trim().length < 5) {
    return { isValid: false, message: 'El asunto debe tener al menos 5 caracteres' };
  }

  if (asunto.trim().length > 100) {
    return { isValid: false, message: 'El asunto no puede exceder 100 caracteres' };
  }

  return { isValid: true, message: '' };
};

export const validateMensaje = (mensaje) => {
  if (!mensaje || mensaje.trim().length === 0) {
    return { isValid: false, message: 'El mensaje es requerido' };
  }

  if (mensaje.trim().length < 10) {
    return { isValid: false, message: 'El mensaje debe tener al menos 10 caracteres' };
  }

  if (mensaje.trim().length > 1000) {
    return { isValid: false, message: 'El mensaje no puede exceder 1000 caracteres' };
  }

  return { isValid: true, message: '' };
};

export const validateForm = (formData) => {
  const errors = {};

  const nombreValidation = validateNombre(formData.nombre);
  if (!nombreValidation.isValid) {
    errors.nombre = nombreValidation.message;
  }

  const emailValidation = validateEmail(formData.email);
  if (!emailValidation.isValid) {
    errors.email = emailValidation.message;
  }

  const telefonoValidation = validateTelefono(formData.telefono);
  if (!telefonoValidation.isValid) {
    errors.telefono = telefonoValidation.message;
  }

  const asuntoValidation = validateAsunto(formData.asunto);
  if (!asuntoValidation.isValid) {
    errors.asunto = asuntoValidation.message;
  }

  const mensajeValidation = validateMensaje(formData.mensaje);
  if (!mensajeValidation.isValid) {
    errors.mensaje = mensajeValidation.message;
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

