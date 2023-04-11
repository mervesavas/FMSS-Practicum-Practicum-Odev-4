import filterEmoji from "../filterEmoji";

describe("filterEmoji function", () => {
  test("filters emojis correctly based on search text", () => {
    // Test için gerekli değişkenlerin tanımlanması
    const searchText = "smile";
    const maxResults = 10;
    const filteredEmojis = filterEmoji(searchText, maxResults); // filterEmoji fonksiyonunun çalıştırılması ve sonuçların filteredEmojis değişkenine atanması
    expect(filteredEmojis.length).toBeGreaterThan(0); // Filtrelenmiş emoji sayısının 0'dan büyük olması bekleniyor
    filteredEmojis.forEach(emoji => { // Her emoji için aşağıdaki testin gerçekleştirilmesi
      expect(
        emoji.title.toLowerCase().includes(searchText.toLowerCase()) ||
        emoji.keywords.includes(searchText)  // Emoji başlığı veya anahtar kelimelerinin, arama metnini içermesi bekleniyor.
      ).toBeTruthy();
    });
  });
});