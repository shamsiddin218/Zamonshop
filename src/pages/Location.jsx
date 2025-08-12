import React from 'react'

export default function Location() {
  return (
    <section id="location" className="mt-[125px] mb-[50px] p-[5px]">
      <h2 className="text-2xl font-bold text-center mb-4">Bizning manzil</h2>
      <div className="h-[450px] max-w-[1200px] mx-auto rounded-xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2942.3484870703187!2d66.89108047579704!3d39.117585771652614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4cbb686357ed39%3A0xfd13d5677a926088!2sIqtidor%20IT%20Academy!5e1!3m2!1sru!2s!4v1754234374763!5m2!1sru!2s"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  )
}
