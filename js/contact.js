document.getElementById('submit').addEventListener('clic', function(event) {
    //event.preventDefault(); // Prevent the form from submitting the traditional way

    const name = document.getElementById('name').value;
    const lastname = document.getElementById('lastname').value;
    const projectType = document.getElementById('projectType').value;
    const message = document.getElementById('message').value;

    const text = `Name: ${name}%0ALastname: ${lastname}%0AProject Type: ${projectType}%0AMessage: ${message}`;
    const whatsappLink = `https://wa.me/573508748103?text=${encodeURIComponent(text)}`;

    console.log(whatsappLink);
    window.open(whatsappLink, '_blank');

    // Clear form fields after submission if needed
    document.getElementById('name').value = '';
    document.getElementById('lastname').value = '';
    document.getElementById('projectType').value = '';
    document.getElementById('message').value = '';
});
