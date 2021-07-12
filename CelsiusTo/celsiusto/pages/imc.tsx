import Link from 'next/link';
import ImcHeader from '../components/ImcHeader';
import ImcCalculator from '../components/ImcCalculator';

export default function Imc() {
    return (
        <div>
            <ImcHeader />
            <ImcCalculator />
        </div>
    )

}