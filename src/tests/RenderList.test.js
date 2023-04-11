import React from 'react';
import { render } from '@testing-library/react';
import EmojiResults from '../EmojiResults';

// EmojiResults componentinin emoji listesini başarıyla render edip etmediğini test ediyor.
describe('Emoji listesi render ediliyor mu', () => {
    // EmojiResults componenti, emojiData propu ile render ediliyor.
    test('Emoji Listesi', () => {
        const emojiData = [  //emojiList.jsondan deneme datası oluşturdum.
            { title : "100",
              symbol : "💯" },
            { title : "Grinning",
              symbol : "😀" },
            { title : "Heart Eyes",
              symbol: "😍", }
        ];
        const { getByTestId } = render(<EmojiResults emojiData={emojiData} />);

        // emoji-list test idsine sahip HTML elementi alınıyor ve emoji sayısı kontrol ediliyor
        const emojiList = getByTestId('emoji-list');
        expect(emojiList.children.length).toBe(3);
    });
});