export const getErrorText = (code) => {
  switch (code) {
    case "no-places":
      return "Limit miejsc został wyczerpany. Zapisaliśmy Cię na liście rezerwowej. Jeżeli zwolnią się jakieś miejsca, skontaktujemy się z Tobą drogą mailową. Nie należy przesyłać tego formularza ponownie.";

    case "form-invalid":
      return "Proszę sprawdzić poprawność podanych danych";

    default:
      return "Wystąpił nieznany błąd. Proszę przesłać formularz ponownie";
  }
};
