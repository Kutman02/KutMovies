import { useState } from 'react';

function Help() {
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Здесь можно добавить отправку сообщения на сервер
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <h1 className="text-2xl font-bold mb-4">Служба поддержки</h1>
      <p className="text-lg mb-6 text-center max-w-md">
        Если у вас возникли вопросы или проблемы, напишите нам — мы поможем!
      </p>
      {submitted ? (
        <div className="bg-green-100 text-green-700 px-4 py-2 rounded">
          Спасибо за обращение! Мы свяжемся с вами в ближайшее время.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col items-center w-full max-w-md">
          <textarea
            className="w-full p-2 border rounded mb-4 resize-none"
            rows={5}
            placeholder="Опишите вашу проблему или вопрос..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            Отправить
          </button>
        </form>
      )}
    </div>
  );
}

export default Help;
