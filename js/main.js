const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const generatePasswordTrigger = document.querySelector('.form span');
const showPasswordCheckbox = document.querySelector('#showPassword');
const submitButton = document.querySelector('button[type="submit"]');

const PASSWORD_LENGTH = 12;

function generateRandomPassword(length, includeSymbols) {
	let characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
	if (includeSymbols) characters += '!@#$%^&*()_+[]{}|;:,.<>?';

	let result = '';
	for (let index = 0; index < length; index++) {
		const randomIndex = Math.floor(Math.random() * characters.length);
		result += characters.charAt(randomIndex);
	}

	return result;
}

function isValidEmail(emailValue) {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
	return emailRegex.test(emailValue.trim());
}

function showNotification(message, type) {
	const title = type === 'success' ? 'OK' : 'Error';
	alert(`${title}: ${message}`);
}

function togglePasswordVisibility(event) {
	if (!passwordInput) return;
	passwordInput.type = event.target.checked ? 'text' : 'password';
}

function fillGeneratedPassword() {
	if (!passwordInput) return;
	passwordInput.value = generateRandomPassword(PASSWORD_LENGTH, true);
}

function validateCredentials() {
	const emailValue = emailInput ? emailInput.value : '';
	const passwordValue = passwordInput ? passwordInput.value : '';

	if (!emailValue || !passwordValue) {
		return { ok: false, message: 'Completa correo y contrasena.' };
	}

	if (!isValidEmail(emailValue)) {
		return { ok: false, message: 'Ingresa un correo valido.' };
	}

	if (passwordValue.length < 8) {
		return { ok: false, message: 'La contrasena debe tener minimo 8 caracteres.' };
	}

	return { ok: true, message: 'Datos ingresados correctamente.' };
}

function handleSubmit(event) {
	event.preventDefault();
	const validation = validateCredentials();
	showNotification(validation.message, validation.ok ? 'success' : 'error');
}

function initializeLoginForm() {
	if (generatePasswordTrigger) {
		generatePasswordTrigger.addEventListener('click', fillGeneratedPassword);
	}

	if (showPasswordCheckbox) {
		showPasswordCheckbox.addEventListener('change', togglePasswordVisibility);
	}

	if (submitButton) {
		submitButton.addEventListener('click', handleSubmit);
	}
}

// Punto de entrada de la interaccion del formulario.
initializeLoginForm();
