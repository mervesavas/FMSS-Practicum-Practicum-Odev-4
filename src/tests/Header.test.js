import {render, screen} from "@testing-library/react"; 
import "@testing-library/jest-dom";
import Header from "../Header";
import React from 'react';

test("Header", () => {
    render(<Header/>);  //<Header/> bileşeni render edilir.
    const header = screen.getByText("Emoji Search");  //Ekranda Emoji Search yazıp yazmadığına bakar.
    expect(header).toBeInTheDocument();
});
