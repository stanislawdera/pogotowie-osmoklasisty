export const getErrorText = (code) => {
  switch (code) {
    case "no-places":
      return "Limit miejsc został wyczerpany. Jeżeli zwolnią się jakieś miejsca, poinformujemy o tym na tej stronie";

    case "form-invalid":
      return "Proszę sprawdzić poprawność podanych danych";

    default:
      return "Wystąpił nieznany błąd. Proszę przesłać formularz ponownie";
  }
};
