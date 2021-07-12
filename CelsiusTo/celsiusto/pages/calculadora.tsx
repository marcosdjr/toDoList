import Link from 'next/link';
import CalculadoraHeader from '../components/CalculadoraHeader';
import CalculadoraCalculator from '../components/CalculadoraCalculator';

export default function Calculadora() {
    return (
        <div>
            <CalculadoraHeader />
            <CalculadoraCalculator />
        </div>
    )

}