import Navbar from '../components/Navbar';

const members = [
    { name: "Élie Legault", title: "VP Chercheuse", image: "/images/bbg.jpeg" },
    { name: "Kiana Salesian-Zanjani", title: "VP Communications", image: "/images/Kiana.png" },
    { name: "Florence Richard", title: "Trésorière", image: "/images/Florence.png" },
    { name: "Marie-Laurence Desmarais", title: "VP Affaires Externes", image: "/images/Marie-Laurence.png" },
    { name: "Camila Quiroga Sanchez", title: "Secrétaire générale", image: "/images/Camila.png" },
    { name: "Leelou Rouxel", title: "VP Évènements", image: "/images/Leelou.png" },
    { name: "Victoria Hum", title: "Présidente", image: "/images/Victoria.png" }
];

export default function NotreComite() {
    return (
        <div>
            <Navbar />
            <main className="p-8">
                <h1 className="text-4xl text-center mb-8">NOTRE COMITÉ</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {members.map((member, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <img src={member.image} alt={member.name} className="rounded-full w-64 h-32 sm:w-64 sm:h-80 lg:w-96 lg:h-96 mb-4 object-cover" />
                            <h2 className="text-xl font-semibold">{member.name}</h2>
                            <p className="text-gray-600">{member.title}</p>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
