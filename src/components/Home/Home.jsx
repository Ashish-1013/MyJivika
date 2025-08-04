import React from 'react';
import akg from '../../assets/Akg.jpg';
import Harsita from '../../assets/Harsita.jpg';



export default function Home() {
    // Animated testimonial carousel state
    const [currentTestimonial, setCurrentTestimonial] = React.useState(0);
    const testimonials = [
        {
            text: '“My Jivika helped me find my first job and improve my skills. The courses are top-notch!”',
            img: akg,
            name: 'A.K.Giri',
        },
        {
            text: '“The career guidance section gave me the confidence to ace my interviews. Highly recommended!”',
            img: Harsita,
            name: 'Harsita M.',
        },
        {
            text: '“A seamless experience from learning to landing a job. Thank you, My Jivika!”',
            img: 'https://tse1.mm.bing.net/th/id/OIP.brmotDoTzzPa59L82D2vigHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
            name: 'Mr Hero',
        },
    ];

    // Auto-change testimonial every 4 seconds
    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="pt-5 min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 animate-fade-in font-sans">
            {/* Hero Section */}
<section className="relative h-screen bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white text-center px-2 sm:px-4 shadow-2xl overflow-hidden animate-hero-slide flex items-center justify-center">
    {/* Background image overlay */}
    <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center pointer-events-none scale-110 blur-sm transition-all duration-1000" />
    
    {/* Content container (now centered) */}
    <div className="relative z-10 max-w-5xl mx-auto w-full px-4">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black mb-6 md:mb-8 drop-shadow-xl tracking-tight animate-text-pop font-display bg-gradient-to-r from-yellow-300 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Welcome to <span className="text-yellow-300 animate-jump font-display">My Jivika</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-xl md:max-w-3xl mx-auto mb-8 md:mb-12 font-medium drop-shadow-lg animate-fade-in font-body text-white/90">
            Building Skills, Shaping Futures – Your one-stop platform for learning and job opportunities.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 w-full max-w-xs sm:max-w-none mx-auto">
            <a
                href="#jobs"
                className="bg-yellow-400 text-gray-900 font-bold px-6 sm:px-12 py-3 sm:py-5 rounded-full shadow-xl hover:bg-yellow-300 transition-all duration-300 text-lg sm:text-2xl flex items-center justify-center relative overflow-hidden group animate-btn-pop font-body"
            >
                <span className="absolute inset-0 bg-yellow-200 opacity-0 group-hover:opacity-30 transition-all duration-300 rounded-full blur-lg"></span>
                <span className="relative z-10">🔍 Explore Jobs</span>
            </a>
            <a
                href="#courses"
                className="bg-white text-blue-700 font-bold px-6 sm:px-12 py-3 sm:py-5 rounded-full shadow-xl hover:bg-blue-100 transition-all duration-300 text-lg sm:text-2xl flex items-center justify-center relative overflow-hidden group animate-btn-pop font-body"
            >
                <span className="absolute inset-0 bg-blue-200 opacity-0 group-hover:opacity-30 transition-all duration-300 rounded-full blur-lg"></span>
                <span className="relative z-10">📚 Browse Courses</span>
            </a>
        </div>
    </div>
    
    {/* Decorative animated shapes */}
    <div className="hidden sm:block absolute top-10 left-10 w-16 md:w-24 h-16 md:h-24 bg-yellow-300 rounded-full opacity-30 animate-float-slow" />
    <div className="hidden sm:block absolute bottom-10 right-10 w-20 md:w-32 h-20 md:h-32 bg-blue-200 rounded-full opacity-20 animate-float-slower" />
</section>





            {/* Quick Links Cards */}
            <section className="container mx-auto py-10 md:py-20 px-2 sm:px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                {[
                    {
                        icon: '💼',
                        title: 'Find Jobs',
                        color: 'border-blue-700',
                        textColor: 'text-blue-700',
                        desc: 'Search thousands of job listings and apply to the ones that suit your career goals.',
                        link: '#jobs',
                        linkText: 'Search Jobs →',
                    },
                    {
                        icon: '🎓',
                        title: 'Learn & Upskill',
                        color: 'border-yellow-400',
                        textColor: 'text-yellow-500',
                        desc: 'Access a wide range of courses to upgrade your skills and stay ahead in your career.',
                        link: '#courses',
                        linkText: 'Browse Courses →',
                    },
                    {
                        icon: '🧑‍💼',
                        title: 'Career Guidance',
                        color: 'border-green-500',
                        textColor: 'text-green-600',
                        desc: 'Get expert tips, resume assistance, and interview preparation to land your dream job.',
                        link: '#guidance',
                        linkText: 'Get Guidance →',
                    },
                ].map((card, i) => (
                    <div
                        key={card.title}
                        className={`p-6 sm:p-8 md:p-10 bg-white rounded-2xl md:rounded-3xl shadow-2xl hover:scale-105 hover:shadow-3xl transition-all duration-500 ${card.color} border-t-8 flex flex-col items-start animate-card-fade`}
                        style={{ animationDelay: `${i * 0.2}s` }}
                    >
                        <div className="text-3xl sm:text-5xl mb-2 sm:mb-4 animate-wiggle">{card.icon}</div>
                        <h2 className={`text-xl sm:text-2xl font-bold ${card.textColor} mb-2 sm:mb-3 font-display`}>{card.title}</h2>
                        <p className="text-gray-600 mb-4 sm:mb-6 font-body text-base sm:text-lg">{card.desc}</p>
                        <a href={card.link} className={`${card.textColor} font-semibold hover:underline mt-auto transition-all duration-200 font-body text-base sm:text-lg`}>
                            {card.linkText}
                        </a>
                    </div>
                ))}
            </section>

            {/* Features Section */}
            <section className="container mx-auto py-10 md:py-20 px-2 sm:px-4">
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-center text-blue-900 mb-8 md:mb-14 animate-text-pop font-display">Why Choose My Jivika?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
                    {[
                        {
                            icon: '🌐',
                            title: 'All-in-One Platform',
                            desc: 'Access jobs, courses, and career resources in one place, tailored for your growth.',
                        },
                        {
                            icon: '🤝',
                            title: 'Trusted by Experts',
                            desc: 'Learn from industry leaders and get guidance from experienced professionals.',
                        },
                        {
                            icon: '🚀',
                            title: 'Fast & Easy',
                            desc: 'Simple navigation, quick applications, and instant access to learning resources.',
                        },
                    ].map((feat, i) => (
                        <div
                            key={feat.title}
                            className="bg-white rounded-xl md:rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 flex flex-col items-center hover:scale-105 transition-transform duration-300 animate-card-fade"
                            style={{ animationDelay: `${i * 0.2 + 0.3}s` }}
                        >
                            <div className="text-4xl sm:text-6xl mb-3 sm:mb-5 animate-wiggle">{feat.icon}</div>
                            <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-3 text-blue-700 font-display">{feat.title}</h3>
                            <p className="text-gray-600 text-center font-body text-base sm:text-lg">{feat.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Testimonials Section - Carousel */}
            <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-10 md:py-20 px-2 sm:px-4">
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-center text-blue-900 mb-8 md:mb-14 animate-text-pop font-display">What Our Users Say</h2>
                <div className="max-w-lg md:max-w-2xl mx-auto flex flex-col items-center relative">
                    <div className="w-full">
                        <div
                            key={testimonials[currentTestimonial].name}
                            className="bg-white rounded-xl md:rounded-2xl shadow-xl p-6 sm:p-8 flex flex-col items-center transition-all duration-700 animate-carousel-fade"
                        >
                            <img
                                src={testimonials[currentTestimonial].img}
                                alt="User"
                                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-blue-300 shadow-lg mb-4 sm:mb-6 animate-photo-pop"
                            />
                            <p className="text-gray-700 mb-4 sm:mb-6 italic text-base sm:text-lg font-body text-center transition-all duration-500">{testimonials[currentTestimonial].text}</p>
                            <span className="font-semibold text-blue-700 font-display text-lg sm:text-xl">{testimonials[currentTestimonial].name}</span>
                        </div>
                    </div>
                    {/* Carousel dots */}
                    <div className="flex gap-2 mt-4 sm:mt-6">
                        {testimonials.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentTestimonial(idx)}
                                className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 border-blue-400 transition-all duration-300 ${currentTestimonial === idx ? 'bg-blue-400 scale-125' : 'bg-white'}`}
                                aria-label={`Go to testimonial ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="container mx-auto py-10 md:py-20 px-2 sm:px-4">
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-center text-blue-900 mb-8 md:mb-14 animate-text-pop font-display">Frequently Asked Questions</h2>
                <div className="max-w-xl md:max-w-3xl mx-auto space-y-6 md:space-y-8">
                    {[
                        {
                            q: 'How do I sign up?',
                            a: 'Click the "Get Started" button and fill out the registration form. It only takes a minute!',
                        },
                        {
                            q: 'Are the courses free?',
                            a: 'Many courses are free, while some premium content may require a small fee.',
                        },
                        {
                            q: 'Can I apply for jobs directly?',
                            a: 'Yes, you can apply for jobs directly through our platform with your profile.',
                        },
                    ].map((faq, i) => (
                        <div
                            key={faq.q}
                            className="bg-white rounded-lg md:rounded-xl shadow-lg p-6 sm:p-8 animate-card-fade"
                            style={{ animationDelay: `${i * 0.2 + 0.9}s` }}
                        >
                            <h3 className="font-bold text-blue-700 mb-2 sm:mb-3 font-display text-base sm:text-lg">{faq.q}</h3>
                            <p className="text-gray-700 font-body text-sm sm:text-base">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white text-center py-10 md:py-20 px-2 sm:px-4 rounded-2xl md:rounded-3xl shadow-2xl mx-2 md:mx-24 my-8 md:my-12 animate-cta-pop">
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 font-display">Ready to Build Your Future?</h2>
                <p className="mb-6 sm:mb-8 text-base sm:text-xl md:text-2xl font-body">Join My Jivika today and take the first step towards success.</p>
                <a
                    href="#signup"
                    className="bg-yellow-400 text-gray-900 font-bold px-8 sm:px-12 py-3 sm:py-4 rounded-full shadow-xl hover:bg-yellow-300 transition-all duration-300 text-base sm:text-xl inline-block relative overflow-hidden group animate-btn-pop font-body"
                >
                    <span className="absolute inset-0 bg-yellow-200 opacity-0 group-hover:opacity-30 transition-all duration-300 rounded-full blur-lg"></span>
                    <span className="relative z-10">🚀 Get Started</span>
                </a>
            </section>

            {/* Animations & Fonts */}
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Roboto+Slab:wght@400;700&family=Montserrat:wght@700&family=Open+Sans:wght@400;600&display=swap');
                .font-display { font-family: 'Montserrat', 'Pacifico', cursive, sans-serif; }
                .font-body { font-family: 'Open Sans', 'Roboto Slab', serif, sans-serif; }
                .animate-fade-in { animation: fadeIn 1.2s ease; }
                .animate-hero-slide { animation: heroSlide 1.2s cubic-bezier(.4,0,.2,1); }
                .animate-card-fade { animation: cardFade 1s cubic-bezier(.4,0,.2,1) both; }
                .animate-text-pop { animation: textPop 0.9s cubic-bezier(.4,0,.2,1); }
                .animate-cta-pop { animation: ctaPop 1.1s cubic-bezier(.4,0,.2,1); }
                .animate-wiggle { animation: wiggle 1.5s infinite alternate; }
                .animate-float-slow { animation: float 6s ease-in-out infinite alternate; }
                .animate-float-slower { animation: float 9s ease-in-out infinite alternate; }
                .animate-jump { animation: jump 1.2s cubic-bezier(.4,0,.2,1) infinite alternate; }
                .animate-btn-pop { animation: btnPop 0.8s cubic-bezier(.4,0,.2,1); }
                .animate-carousel-fade { animation: carouselFade 1s cubic-bezier(.4,0,.2,1); }
                .animate-photo-pop { animation: photoPop 1s cubic-bezier(.4,0,.2,1); }
                @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
                @keyframes heroSlide { from { opacity: 0; transform: translateY(-40px);} to { opacity: 1; transform: none; } }
                @keyframes cardFade { from { opacity: 0; transform: translateY(40px);} to { opacity: 1; transform: none; } }
                @keyframes textPop { 0% { opacity: 0; transform: scale(0.8);} 80% { opacity: 1; transform: scale(1.05);} 100% { transform: scale(1);} }
                @keyframes ctaPop { 0% { opacity: 0; transform: scale(0.7);} 80% { opacity: 1; transform: scale(1.03);} 100% { transform: scale(1);} }
                @keyframes btnPop { 0% { opacity: 0; transform: scale(0.7);} 80% { opacity: 1; transform: scale(1.08);} 100% { transform: scale(1);} }
                @keyframes wiggle { 0% { transform: rotate(-6deg);} 100% { transform: rotate(6deg);} }
                @keyframes float { 0% { transform: translateY(0);} 100% { transform: translateY(-30px);} }
                @keyframes jump {
                    0% { transform: translateY(0);}
                    10% { transform: translateY(-8px);}
                    20% { transform: translateY(-16px);}
                    30% { transform: translateY(-24px);}
                    40% { transform: translateY(-16px);}
                    50% { transform: translateY(-8px);}
                    60% { transform: translateY(0);}
                    100% { transform: translateY(0);}
                }
                @keyframes carouselFade { from { opacity: 0; transform: scale(0.95);} to { opacity: 1; transform: scale(1);} }
                @keyframes photoPop { 0% { opacity: 0; transform: scale(0.7);} 80% { opacity: 1; transform: scale(1.08);} 100% { transform: scale(1);} }
                /* Responsive font and padding tweaks */
                @media (max-width: 640px) {
                    .font-display { font-size: 1.1rem; }
                    .font-body { font-size: 1rem; }
                }
            `}</style>
        </div>
    );
}
