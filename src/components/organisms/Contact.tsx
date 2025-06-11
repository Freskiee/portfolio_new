import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import { SectionTitle } from '../atoms/SectionTitle';
import { Button } from '../atoms/Button';
import { Card } from '../atoms/Card';
import { SocialLinks } from '../molecules/SocialLinks';
import { useLanguage } from '../../contexts/LanguageContext';

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío del formulario
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert(t('contact.success'));
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <MapPin size={20} />,
      title: t('contact.info.location'),
      info: 'Ciudad, País'
    },
    {
      icon: <Phone size={20} />,
      title: t('contact.info.phone'),
      info: '+34 123 456 789'
    },
    {
      icon: <Mail size={20} />,
      title: t('contact.info.email'),
      info: 'tu@email.com'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-light">
      <div className="container">
        <SectionTitle
          title={t('contact.title')}
          subtitle={t('contact.subtitle')}
        />
        
        <div className="row g-5">
          <div className="col-lg-8">
            <Card className="p-4 p-md-5">
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label fw-semibold">
                      {t('contact.name')} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder={t('contact.placeholder.name')}
                    />
                  </div>
                  
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label fw-semibold">
                      {t('contact.email')} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder={t('contact.placeholder.email')}
                    />
                  </div>
                  
                  <div className="col-12">
                    <label htmlFor="message" className="form-label fw-semibold">
                      {t('contact.message')} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="form-control"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder={t('contact.placeholder.message')}
                    />
                  </div>
                  
                  <div className="col-12">
                    <Button
                      variant="primary"
                      size="lg"
                      icon={<Send size={20} />}
                      className="w-100 w-md-auto"
                    >
                      {isSubmitting ? t('contact.sending') : t('contact.send')}
                    </Button>
                  </div>
                </div>
              </motion.form>
            </Card>
          </div>
          
          <div className="col-lg-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-4 mb-4">
                <h4 className="fw-bold mb-4">{t('contact.info.title')}</h4>
                
                {contactInfo.map((item, index) => (
                  <div key={index} className="d-flex align-items-center mb-3">
                    <div className="contact-icon me-3">
                      {item.icon}
                    </div>
                    <div>
                      <h6 className="fw-semibold mb-1">{item.title}</h6>
                      <p className="text-muted mb-0">{item.info}</p>
                    </div>
                  </div>
                ))}
              </Card>
              
              <Card className="p-4">
                <h5 className="fw-bold mb-4 text-center">{t('contact.social')}</h5>
                <SocialLinks />
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};