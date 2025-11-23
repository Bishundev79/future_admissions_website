import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '../lib/supabase';

const contactSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters').max(50, 'First name is too long'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().regex(/^[0-9]{10}$/, 'Please enter a valid 10-digit phone number'),
  program: z.string().min(1, 'Please select a program'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(500, 'Message is too long')
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: 'onBlur'
  });

  const message = watch('message', '');
  const messageLength = message?.length || 0;

  const onSubmit = async (data: ContactFormData) => {
    try {
      const { error } = await supabase
        .from('contact_inquiries')
        .insert([
          {
            first_name: data.firstName,
            email: data.email,
            phone: data.phone,
            program: data.program,
            message: data.message
          }
        ]);

      if (error) throw error;

      toast.success('Message sent successfully!', {
        description: 'We\'ll get back to you within 24 hours.'
      });
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to send message', {
        description: 'Please check your connection and try again.'
      });
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-50 via-white to-primary-50/20 dark:from-slate-900 dark:via-slate-800 dark:to-primary-900/20 relative overflow-hidden">
      {/* Background texture elements */}
      <div className="absolute inset-0">
        {/* Dot pattern */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{
          backgroundImage: 'radial-gradient(circle, #9333ea 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}></div>
        
        {/* Blur orbs */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-radial from-primary-100/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-radial from-blue-100/30 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 p-4 sm:p-6 md:p-10 rounded-2xl sm:rounded-3xl shadow-soft border border-slate-100 dark:border-slate-700 relative">
            {isSubmitting && (
              <div className="absolute inset-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-3xl flex items-center justify-center z-10">
                <div className="text-center">
                  <Loader2 className="animate-spin text-primary-600 dark:text-primary-400 mx-auto mb-2" size={40} />
                  <p className="text-slate-600 dark:text-slate-300 font-medium">Sending your message...</p>
                </div>
              </div>
            )}

            <div className="mb-6">
              <label htmlFor="firstName" className="block text-slate-700 dark:text-slate-200 font-semibold mb-3 text-lg">
                First Name *
              </label>
              <input
                {...register('firstName')}
                type="text"
                id="firstName"
                className={`w-full px-4 py-3 sm:px-5 sm:py-4 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent transition-all text-base sm:text-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 ${
                  errors.firstName ? 'border-red-500 dark:border-red-400' : 'border-slate-200 dark:border-slate-700'
                }`}
                placeholder="Enter your first name"
                aria-invalid={errors.firstName ? 'true' : 'false'}
                aria-describedby={errors.firstName ? 'firstName-error' : undefined}
              />
              {errors.firstName && (
                <p id="firstName-error" className="mt-2 text-sm text-red-600 dark:text-red-400" role="alert">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="email" className="block text-slate-700 dark:text-slate-200 font-semibold mb-3 text-lg">
                  Email Address *
                </label>
                <input
                  {...register('email')}
                  type="email"
                  id="email"
                  className={`w-full px-4 py-3 sm:px-5 sm:py-4 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent transition-all text-base sm:text-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 ${
                    errors.email ? 'border-red-500 dark:border-red-400' : 'border-slate-200 dark:border-slate-700'
                  }`}
                  placeholder="your.email@example.com"
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-2 text-sm text-red-600 dark:text-red-400" role="alert">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-slate-700 dark:text-slate-200 font-semibold mb-3 text-lg">
                  Phone Number *
                </label>
                <input
                  {...register('phone')}
                  type="tel"
                  id="phone"
                  className={`w-full px-4 py-3 sm:px-5 sm:py-4 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent transition-all text-base sm:text-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 ${
                    errors.phone ? 'border-red-500 dark:border-red-400' : 'border-slate-200 dark:border-slate-700'
                  }`}
                  placeholder="9876543210"
                  aria-invalid={errors.phone ? 'true' : 'false'}
                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                />
                {errors.phone && (
                  <p id="phone-error" className="mt-2 text-sm text-red-600 dark:text-red-400" role="alert">
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="program" className="block text-slate-700 dark:text-slate-200 font-semibold mb-3 text-lg">
                Program Interest *
              </label>
              <select
                {...register('program')}
                id="program"
                className={`w-full px-4 py-3 sm:px-5 sm:py-4 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent transition-all text-base sm:text-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white ${
                  errors.program ? 'border-red-500 dark:border-red-400' : 'border-slate-200 dark:border-slate-700'
                }`}
                aria-invalid={errors.program ? 'true' : 'false'}
                aria-describedby={errors.program ? 'program-error' : undefined}
              >
                <option value="">Select a program</option>
                <option value="MBA">MBA</option>
                <option value="BBA">BBA</option>
                <option value="Both">Both MBA & BBA</option>
                <option value="Other">Other</option>
              </select>
              {errors.program && (
                <p id="program-error" className="mt-2 text-sm text-red-600 dark:text-red-400" role="alert">
                  {errors.program.message}
                </p>
              )}
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-center mb-3">
                <label htmlFor="message" className="block text-slate-700 dark:text-slate-200 font-semibold text-lg">
                  Message *
                </label>
                <span className={`text-sm ${messageLength > 500 ? 'text-red-600 dark:text-red-400' : 'text-slate-500 dark:text-slate-400'}`}>
                  {messageLength}/500
                </span>
              </div>
              <textarea
                {...register('message')}
                id="message"
                rows={5}
                className={`w-full px-4 py-3 sm:px-5 sm:py-4 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent transition-all text-base sm:text-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 resize-none ${
                  errors.message ? 'border-red-500 dark:border-red-400' : 'border-slate-200 dark:border-slate-700'
                }`}
                placeholder="Tell us about your admission requirements and goals..."
                aria-invalid={errors.message ? 'true' : 'false'}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && (
                <p id="message-error" className="mt-2 text-sm text-red-600 dark:text-red-400" role="alert">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-3.5 sm:py-4 rounded-xl hover:shadow-glow transition-all duration-300 flex items-center justify-center font-semibold text-base sm:text-lg disabled:opacity-50 disabled:cursor-not-allowed group focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin mr-2" size={22} />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={22} className="mr-2 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
