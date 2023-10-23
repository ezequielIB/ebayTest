class EbayPage {
    //Tomamos los ID de la pagina www.ebay.com
    get searchInput() { return $('input[name="gh-tb"]'); }
    get searchButton() { return $('input[type="gh-btn"]'); }
}

export default new EbayPage();
