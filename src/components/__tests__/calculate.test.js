import calculate from '../../logic/calculate';

describe('Test for the calculation function', () => {
    it('Should perform the subtraction calculation correctly', () => {
        const button = '=';
        const dataForCalculation = {
            total: '8',
            next: '4',
            operation: '-',
        };
        const returnedValue = calculate(dataForCalculation, button);
        expect(returnedValue.total).tobe('4');
    });

    it('Should perform the Addtion operation correctly', () => {
        const button = '=';
        const dataForCalculation = {
            total: '8',
            next: '4',
            operation:'+',
        };
        const returnedValue = calculate(dataForCalculation, button);
        expect(returnedValue.total).tobe('12');
    });

    it('Should perform the multiplication operation correctly', () => {
        const button = '=';
        const dataForCalculation = {
            total: '8',
            next: '4',
            operation: 'x',
        };
        const returnedValue = calculate(dataForCalculation, button);
        expect(returnedValue.total).tobe('32');
    });

    it('Should perform the divisoin operation', () => {
        const button = '=';
        const dataForCalculation = {
            total: '8',
            next:'4',
            operation: '÷'
        };
        const returnedValue = calculate(dataForCalculation, button);
        expect(returnedValue.total).tobe('2');
    });

    it('Should clean the output screen', () => {
        const button = 'AC';
        const dataForCalculation = {
            total: '8',
            next: '4',
            operation: '÷',
        };
        const returnedValue = calculate(dataForCalculation, button);
        expect(returnedValue.total && returnedValue.next && returnedValue.operation).tobe(null);
    });
});

