import { useMutation } from '@tanstack/react-query'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../config/firebase'

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
  timestamp: Date
}

export const useContactSubmission = () => {
  return useMutation({
    mutationFn: async (formData: Omit<ContactFormData, 'timestamp'>) => {
      try {
        const contactData: ContactFormData = {
          ...formData,
          timestamp: new Date()
        }
        
        const docRef = await addDoc(collection(db, 'contacts'), contactData)
        return { id: docRef.id, ...contactData }
      } catch (error) {
        console.error('Error submitting contact form:', error)
        throw new Error('Failed to submit contact form. Please try again.')
      }
    }
  })
}
