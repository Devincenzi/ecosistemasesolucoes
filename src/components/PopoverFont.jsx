import { useRef, useEffect } from 'react';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import './PopoverFont.css';

const fonts = [
    'font-a',
    'font-b',
    'font-c',
    'font-d'
];

const regexClass = /(font-[a-zA-Z]+)/g;

function PopoverFont(props){
    const elementToChange = useRef();
    const fontsList = useRef();

    useEffect(() => {
        if(!elementToChange.current)
            return

        function renderFontsList(){
            console.log(elementToChange.current);

            const list = fonts.map(f => 
                <span key={f} className={`itemList`} onClick={() => console.log(elementToChange)}>{f}</span> 
                )
            
            fontsList.current = list;
        }

        renderFontsList();

    }, [elementToChange.current]);

    const popoverChangeFont = (
        <Popover id='popoverFont'>
            <Popover.Header as='h4'>Selecione sua fonte</Popover.Header>
            <Popover.Body className='text-center px-0 pt-1'>
                {fontsList.current ? fontsList.current.map(e => e) : ''}
            </Popover.Body>
        </Popover>
    )

    

    function changeFont(event, font){
		const listaClassesElemento = event.currentTarget.classList;

		const classToRemove = listaClassesElemento.value.match(regexClass);
		listaClassesElemento.remove(classToRemove);
		
		listaClassesElemento.add(font);
	}

    return (
        <>
        <OverlayTrigger trigger='click' placement='top' overlay={popoverChangeFont}>
            <span ref={elementToChange}>
                {props.children}
            </span>
        </OverlayTrigger>
        </>
    )
}

export default PopoverFont;