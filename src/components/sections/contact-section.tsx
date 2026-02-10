"use client"

import { useState } from "react"
import { Phone, MapPin, Clock, ArrowRight, CheckCircle, AlertCircle } from "lucide-react"
import { contactContent as defaultContactContent } from "@/content/remonter/contact"

interface ContactSectionProps {
  content?: typeof defaultContactContent
}

interface FormErrors {
  [key: string]: string
}

export function ContactSection({ content = defaultContactContent }: ContactSectionProps) {
  const contactContent = content
  const [formData, setFormData] = useState<Record<string, string>>({})
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const validatePhone = (phone: string): boolean => {
    const cleaned = phone.replace(/\s/g, '')
    return /^[0-9]{9,12}$/.test(cleaned)
  }

  const validateField = (name: string, value: string, type: string): string => {
    if (!value || value.trim() === '') {
      return 'To pole jest wymagane'
    }
    if (type === 'tel' && !validatePhone(value)) {
      return 'Podaj poprawny numer telefonu (9-12 cyfr)'
    }
    return ''
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))

    // Clear error on change
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>, type: string) => {
    const { name, value } = e.target
    const error = validateField(name, value, type)
    if (error) {
      setErrors(prev => ({ ...prev, [name]: error }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate all fields
    const newErrors: FormErrors = {}
    contactContent.fields?.forEach(field => {
      const name = field.label.toLowerCase()
      const value = formData[name] || ''
      const error = validateField(name, value, field.type)
      if (error) {
        newErrors[name] = error
      }
    })

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)

    // Simulate form submission (replace with actual API call)
    await new Promise(resolve => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSuccess(true)
    setFormData({})

    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000)
  }

  return (
    <section id="kontakt" className="min-h-screen flex flex-col lg:flex-row overflow-hidden">
      {/* Lewa strona - ciemna */}
      <div className="w-full lg:w-1/2 bg-secondary p-8 lg:p-24 flex flex-col justify-center relative">
        <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

        <div className="relative z-10 max-w-xl mx-auto lg:mx-0">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">{contactContent.badge}</span>
          <h2 className="text-4xl lg:text-6xl font-bold text-secondary-foreground mb-6 leading-tight">
            {contactContent.title}
            <div className="h-1.5 w-20 bg-primary mt-4 rounded-full" />
          </h2>
          <p className="text-secondary-foreground/70 text-lg mb-12 max-w-md leading-relaxed">
            {contactContent.description}
          </p>

          <div className="space-y-6">
            {contactContent.phone && (
              <a href={`tel:${contactContent.phone.replace(/\s/g, '')}`} className="flex items-center group p-4 rounded-xl hover:bg-secondary-foreground/5 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-secondary-foreground/10 flex items-center justify-center mr-6 group-hover:bg-primary transition-colors">
                  <Phone className="w-5 h-5 text-secondary-foreground" />
                </div>
                <div>
                  <p className="text-secondary-foreground/50 text-sm uppercase tracking-wide font-medium">Telefon</p>
                  <p className="text-secondary-foreground text-xl font-bold">{contactContent.phone}</p>
                </div>
              </a>
            )}

            {contactContent.address && (
              <div className="flex items-center group p-4 rounded-xl hover:bg-secondary-foreground/5 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-secondary-foreground/10 flex items-center justify-center mr-6 group-hover:bg-primary transition-colors">
                  <MapPin className="w-5 h-5 text-secondary-foreground" />
                </div>
                <div>
                  <p className="text-secondary-foreground/50 text-sm uppercase tracking-wide font-medium">Lokalizacja</p>
                  <p className="text-secondary-foreground text-xl font-bold leading-tight">{contactContent.address}</p>
                </div>
              </div>
            )}

            {contactContent.hours && (
              <div className="flex items-center group p-4 rounded-xl hover:bg-secondary-foreground/5 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-secondary-foreground/10 flex items-center justify-center mr-6 group-hover:bg-primary transition-colors">
                  <Clock className="w-5 h-5 text-secondary-foreground" />
                </div>
                <div>
                  <p className="text-secondary-foreground/50 text-sm uppercase tracking-wide font-medium">Godziny pracy</p>
                  <p className="text-secondary-foreground text-xl font-bold">{contactContent.hours}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Prawa strona - jasna */}
      <div className="w-full lg:w-1/2 bg-card p-8 lg:p-24 flex flex-col justify-center">
        <div className="max-w-xl mx-auto lg:ml-0 w-full">
          <h3 className="text-3xl font-bold text-foreground mb-8">{contactContent.formTitle}</h3>

          {isSuccess ? (
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6 text-center">
              <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-foreground mb-2">Wiadomość wysłana!</h4>
              <p className="text-muted-foreground">Odezwę się najszybciej jak to możliwe.</p>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactContent.fields?.filter(f => f.half).map((field, i) => {
                  const name = field.label.toLowerCase()
                  const hasError = !!errors[name]
                  return (
                    <div key={i} className="space-y-2">
                      <label className="block text-sm font-semibold text-foreground" htmlFor={`contact-${name}`}>
                        {field.label} <span className="text-primary">*</span>
                      </label>
                      <input
                        className={`w-full px-4 py-3 bg-muted border text-foreground rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none ${
                          hasError ? 'border-red-500 bg-red-500/5' : 'border-border'
                        }`}
                        id={`contact-${name}`}
                        name={name}
                        placeholder={field.placeholder}
                        type={field.type === 'textarea' ? 'text' : field.type}
                        value={formData[name] || ''}
                        onChange={handleChange}
                        onBlur={(e) => handleBlur(e, field.type)}
                        required
                      />
                      {hasError && (
                        <p className="text-red-500 text-xs flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors[name]}
                        </p>
                      )}
                    </div>
                  )
                })}
              </div>

              {contactContent.fields?.filter(f => !f.half).map((field, i) => {
                const name = field.label.toLowerCase()
                const hasError = !!errors[name]
                return (
                  <div key={i} className="space-y-2">
                    <label className="block text-sm font-semibold text-foreground" htmlFor={`contact-${name}`}>
                      {field.label} <span className="text-primary">*</span>
                    </label>
                    {field.type === 'textarea' ? (
                      <textarea
                        className={`w-full px-4 py-3 bg-muted border text-foreground rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none resize-none ${
                          hasError ? 'border-red-500 bg-red-500/5' : 'border-border'
                        }`}
                        id={`contact-${name}`}
                        name={name}
                        placeholder={field.placeholder}
                        rows={5}
                        value={formData[name] || ''}
                        onChange={handleChange}
                        onBlur={(e) => handleBlur(e, field.type)}
                        required
                      />
                    ) : (
                      <input
                        className={`w-full px-4 py-3 bg-muted border text-foreground rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none ${
                          hasError ? 'border-red-500 bg-red-500/5' : 'border-border'
                        }`}
                        id={`contact-${name}`}
                        name={name}
                        placeholder={field.placeholder}
                        type={field.type}
                        value={formData[name] || ''}
                        onChange={handleChange}
                        onBlur={(e) => handleBlur(e, field.type)}
                        required
                      />
                    )}
                    {hasError && (
                      <p className="text-red-500 text-xs flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors[name]}
                      </p>
                    )}
                  </div>
                )
              })}

              <button
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 px-8 rounded-lg flex items-center justify-center space-x-2 transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Wysyłanie...</span>
                  </>
                ) : (
                  <>
                    <span>{contactContent.submitText}</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

              <p className="text-center text-xs text-muted-foreground italic mt-6">
                * Wszystkie pola są wymagane. Wycena jest całkowicie darmowa i niezobowiązująca.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
