"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2 } from "lucide-react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import { loginValidationSchema } from "@/app/validations/login-validations"
import { toast } from 'sonner'
import { useRouter } from "next/navigation"

export function LoginForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const navigator = useRouter()

  const handleSubmit = async (
    values: { email: string; password: string },
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    setIsLoading(true)
    setError("")
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })
      if (!res.ok) {
        const data = await res.json()
        setError(data.message || "Login failed")
      } else {
        toast.success("Login successful!")
        navigator.push("/dashboard")
      }
    } catch (err) {
      setError("An error occurred. Please try again.")
    }
    setIsLoading(false)
    setSubmitting(false)
  }

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={loginValidationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-4">
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Field
              as={Input}
              id="email"
              name="email"
              type="email"
              placeholder="name@example.com"
              disabled={isLoading || isSubmitting}
              required
            />
            <div className="text-sm text-red-500">
              <ErrorMessage name="email" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Field
              as={Input}
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              disabled={isLoading || isSubmitting}
              required
            />
            <div className="text-sm text-red-500">
              <ErrorMessage name="password" />
            </div>
          </div>

          <Button type="submit" className="w-full" disabled={isLoading || isSubmitting}>
            {(isLoading || isSubmitting) && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Sign in
          </Button>
        </Form>
      )}
    </Formik>
  )
}
