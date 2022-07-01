function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "Your Gmail Address",
	Password : "Your Gmail Password",
	To : 'recipient_1_email_address, recipient_2_email_address',
	From : "sender’s email address",
	Subject : "email subject",
	Body : "email body",
	}).then(
		message => alert("Mesajınız Başarıyla İletildi.")
	);
}