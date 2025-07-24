import React from 'react';
import { Mail, MapPin, MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: t('contact.email'),
      value: 'jade.rq01@gmail.com',
      href: 'mailto:jade.rq01@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: t('contact.location'),
      value: t('contact.locationValue'),
      href: '#',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: t('contact.response'),
      value: t('contact.responseTime'),
      href: '#',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="contacto" className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden transition-colors duration-500">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-transparent to-pink-50/30 dark:from-purple-900/10 dark:via-transparent dark:to-pink-900/10"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-100/20 dark:bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-100/20 dark:bg-pink-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-100 dark:bg-purple-500/20 px-4 py-2 rounded-full mb-6">
            <MessageCircle className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span className="text-purple-700 dark:text-purple-300 text-sm font-medium">{t('contact.badge')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t('contact.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
            {t('contact.description')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              {t('contact.subtitle')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
              {t('contact.intro')}
            </p>
          </div>

          {/* Contact methods */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactMethods.map((method, index) => (
              <div key={index} className="group text-center">
                <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-200/50 dark:border-slate-700/50 hover:border-purple-300 dark:hover:border-purple-500/40 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10">
                  <div className={`inline-flex w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {method.icon}
                  </div>
                  <h4 className="text-gray-900 dark:text-white font-semibold mb-3 text-lg">{method.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{method.value}</p>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;