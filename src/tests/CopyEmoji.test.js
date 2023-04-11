import React from "react";
import { render, fireEvent } from "@testing-library/react";
import EmojiResultsRow from "../EmojiResultRow";

beforeAll(() => {
  navigator.clipboard = {
    writeText: jest.fn(() => Promise.resolve()),
    readText: jest.fn(() => Promise.resolve("😊"))
  };
});
//navigator.clipboard, panoyu okumak ve yazmak için kullanılan bir tarayıcı APIsidir. Ancak, test senaryosu tarayıcının gerçek clipboard APIsine bağlı olmamalıdır. Bu nedenle, jest.fn() fonksiyonu kullanılarak writeText() ve readText() metodları yeniden tanımlanır.

describe("Copy Emoji", () => {
  test("Tıklama olayı gerçekleştiğinde emoji kopyalanıyor mu?", async () => {
    
    const title = "100";
    const symbol = "💯";
    const { getByText } = render(<EmojiResultsRow title={title} symbol={symbol} />); //EmojiResultsRow bileşenini render eder. 
    //getByText() fonksiyonu, title ve symbol değişkenlerinin değerlerine göre bileşenin render edildiği sanal DOMda ilgili metni arar ve geri döndürür.


    const copy = getByText("Click to copy emoji"); //getByText() fonksiyonunu kullanılarak "Click to copy emoji" metnini içeren bir DOM öğesi bulunur. 

    fireEvent.click(copy);  //Click to copy emojiye tıklanma olayını tetikler.

    expect(await navigator.clipboard.readText()).toEqual("😊"); //Kod çalıştığında, panodaki metin "😊" ile aynı ise, testin geçmesi için expect fonksiyonu true değerini döndürür.
  });
});
