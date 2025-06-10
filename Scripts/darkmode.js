function toggleDarkMode()
{
   const body = document.body;
   const navbar = document.querySelector('.navbar');
   const contactContainer = document.querySelector('.contact-container');
   const footer = document.querySelector('.footer');
   const inputs = document.querySelectorAll('.contact-container input, .contact-container textarea');
   const links = document.querySelectorAll('.nav-links a');
   body.classList.toggle('dark-mode');
   navbar?.classList.toggle('dark-mode');
   contactContainer?.classList.toggle('dark-mode');
   footer?.classList.toggle('dark-mode');
   inputs.forEach(input => input.classList.toggle('dark-mode'));
   links.forEach(link => link.classList.toggle('dark-mode'));
   localStorage.setItem('darkMode', body.classList.contains('dark-mode') ? 'enabled' : 'disabled')
}
document.addEventListener('DOMContentLoaded', () =>
{
   const darkModeStatus = localStorage.getItem('darkMode');
   if (darkModeStatus === 'enabled')
   {
      document.body.classList.add('dark-mode');
      const navbar = document.querySelector('.navbar');
      const contactContainer = document.querySelector('.contact-container');
      const footer = document.querySelector('.footer');
      if (navbar) navbar.classList.add('dark-mode');
      if (contactContainer) contactContainer.classList.add('dark-mode');
      if (footer) footer.classList.add('dark-mode');
      const inputs = document.querySelectorAll('.contact-container input, .contact-container textarea');
      inputs.forEach(input => input.classList.add('dark-mode'));
      const links = document.querySelectorAll('.nav-links a');
      links.forEach(link => link.classList.add('dark-mode'))
   }
   const toggleButton = document.getElementById('dark-mode-toggle');
   if (toggleButton)
   {
      toggleButton.addEventListener('click', toggleDarkMode)
   }
   else
   {
      console.error("Dark mode toggle button not found.")
   }
});

function checkDarkMode()
{
   const darkModeStatus = localStorage.getItem('darkMode');
   if (darkModeStatus === 'enabled')
   {
      document.body.classList.add('dark-mode');
      const navbar = document.querySelector('.navbar');
      const contactContainer = document.querySelector('.contact-container');
      const footer = document.querySelector('.footer');
      if (navbar) navbar.classList.add('dark-mode');
      if (contactContainer) contactContainer.classList.add('dark-mode');
      if (footer) footer.classList.add('dark-mode');
      const inputs = document.querySelectorAll('.contact-container input, .contact-container textarea');
      inputs.forEach(input =>
      {
         input.classList.add('dark-mode')
      });
      const links = document.querySelectorAll('.nav-links a');
      links.forEach(link =>
      {
         link.classList.add('dark-mode')
      })
   }
}
document.addEventListener('DOMContentLoaded', checkDarkMode);
document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode)