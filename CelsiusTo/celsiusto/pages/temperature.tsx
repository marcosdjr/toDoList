import Link from 'next/link';
import TemperatureHeader from '../components/TemperatureHeader';
import TemperatureCalculator from '../components/TemperatureCalculator';

export default function Temperature() {
    return (
        <div>
            <TemperatureHeader />
            <TemperatureCalculator />

        </div>
    )

}