import { render, screen } from '@testing-library/react';
import Contact from './common/Contact/Contact';
import Header from './common/Home/Home';
import { Lern } from './common/Learning/lern';


// test('lern component', () => {
//     const list = render(<Lern/>)
//     expect(list).toMatchSnapshot()
// })

describe('App component', () => {
    
    it('header', () => {
        render(<Header />);
    });
          
    it('lern renders', () => {
        render(<Lern />);

        expect(screen.getByText('Размер экрана')).toBeInTheDocument();

    });

    it('foot render', () => {
        render(<Contact />);
    });

})
