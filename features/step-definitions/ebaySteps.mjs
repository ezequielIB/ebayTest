import { Given, When, Then } from 'cucumber';
import ebayPage from '/features/pageobjects/ebayPage.mjs'; // Usa una ruta relativa


Given('Abrir el navegador Chrome', () => {
    // No es necesario inicializar el navegador en este caso
    // WebDriverIO abrirá el navegador por defecto configurado en wdio.conf.js
});

When('Abrir la URL de eBay', () => {
    const ebayURL = 'https://www.ebay.com'; // URL válida de eBay
    browser.url(ebayURL);
});

When('Ingresar la palabra "pilas" en el cuadro de búsqueda', () => {
    ebayPage.searchInput.setValue('pilas'); // Escribir "pilas" en el cuadro de búsqueda
});

When('Hacer clic en el botón de búsqueda', () => {
    ebayPage.searchButton.click(); // Hacer clic en el botón de búsqueda
});

Then('Imprimir por consola el número de items que devuelve la búsqueda', () => {
    // Esperar un momento para que se carguen los resultados
    browser.pause(3000);

    // Obtener el número de resultados
    const searchResults = $$('.s-item');
    const numberOfResults = searchResults.length; // Debes declarar numberOfResults como una variable

    console.log(`Número de items encontrados: ${numberOfResults}`);
});

Then('Verificar que se encontraron resultados', () => {
    // Verificar que al menos se haya encontrado un resultado
    expect(numberOfResults).toBeGreaterThan(0);
});
