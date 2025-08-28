"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Checkbox } from "@/components/ui/checkbox"
import { Loader2 } from "lucide-react"
import Link from "next/link"
import { Formik, Form, Field, ErrorMessage } from "formik"
import { signupValidationSchema } from "@/app/validations/signup-validations"


export function SignupForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        acceptTerms: false,
      }}
      validationSchema={signupValidationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        setIsLoading(true)
        setError("")
        try {
          const response = await fetch("/api/signup", {
            method: "POST",
            body: JSON.stringify({
              firstName: values.firstName,
              lastName: values.lastName,
              email: values.email,
              password: values.password,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          })
          if (!response.ok) {
            const data = await response.json()
            setError(data.error || "Something went wrong")
          } else {
            // Handle successful signup
            console.log("Signup successful")
          }
        } catch (err) {
          setError("Something went wrong")
        }
        setIsLoading(false)
        setSubmitting(false)
      }}
    >
      {({ isSubmitting, values, setFieldValue }) => (
        <Form className="space-y-4">
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First name</Label>
              <Field
                as={Input}
                id="firstName"
                name="firstName"
                placeholder="John"
                required
                disabled={isLoading}
              />
              <ErrorMessage name="firstName" component="div" className="text-xs text-red-500" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last name</Label>
              <Field
                as={Input}
                id="lastName"
                name="lastName"
                placeholder="Doe"
                required
                disabled={isLoading}
              />
              <ErrorMessage name="lastName" component="div" className="text-xs text-red-500" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Field
              as={Input}
              id="email"
              name="email"
              type="email"
              placeholder="name@example.com"
              required
              disabled={isLoading}
            />
            <ErrorMessage name="email" component="div" className="text-xs text-red-500" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Field
              as={Input}
              id="password"
              name="password"
              type="password"
              placeholder="Create a strong password"
              required
              disabled={isLoading}
            />
            <ErrorMessage name="password" component="div" className="text-xs text-red-500" />
            <p className="text-xs text-muted-foreground">
              Must be at least 8 characters with uppercase, lowercase, and numbers
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="terms"
              checked={values.acceptTerms}
              onCheckedChange={(checked) => setFieldValue("acceptTerms", checked)}
              disabled={isLoading}
            />
            <Label
              htmlFor="terms"
              className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I agree to the{" "}
              <Link href="/terms" className="text-primary hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
            </Label>
          </div>
          <ErrorMessage name="acceptTerms" component="div" className="text-xs text-red-500" />

          <Button
            type="submit"
            className="w-full"
            disabled={isLoading || isSubmitting || !values.acceptTerms}
          >
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Create account
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            By creating an account, you'll receive a verification email to activate your account.
          </p>
        </Form>
      )}
    </Formik>
  )
}
