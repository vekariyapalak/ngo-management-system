import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const MemberRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const payload = {
        ...data,
        role: 'MEMBER',
        status: 'PENDING',
      };
      console.log('Payload:', payload);
      // Handle file upload separately if needed
      // await axios.post('/api/register', payload);
      alert('Registration successful! Your account is pending approval.');
    } catch (error) {
      console.error('Error:', error);
      alert('Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const typeOptions = [
    { value: 'organization', label: 'Organization' },
    { value: 'individual', label: 'Individual' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Member / Partner Registration
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Partner with us to amplify your impact.
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="type" className="block text-sm font-medium text-gray-700">Type</label>
            <Controller
              name="type"
              control={control}
              rules={{ required: 'Please select type' }}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    {typeOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {errors.type && <p className="text-red-500 text-sm">{errors.type.message}</p>}
          </div>
          <div>
            <label htmlFor="contactName" className="block text-sm font-medium text-gray-700">Contact Person Name</label>
            <Input
              id="contactName"
              placeholder="Enter contact person name"
              {...register("contactName", { required: 'Contact person name is required' })}
            />
            {errors.contactName && <p className="text-red-500 text-sm">{errors.contactName.message}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Invalid email address',
                },
              })}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>
          <div>
            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile</label>
            <Input
              id="mobile"
              type="tel"
              placeholder="Enter your mobile number"
              {...register("mobile", { required: 'Mobile number is required' })}
            />
            {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile.message}</p>}
          </div>
          <div>
            <label htmlFor="purpose" className="block text-sm font-medium text-gray-700">Purpose</label>
            <Input
              id="purpose"
              placeholder="Describe your purpose"
              {...register("purpose", { required: 'Purpose is required' })}
            />
            {errors.purpose && <p className="text-red-500 text-sm">{errors.purpose.message}</p>}
          </div>
          <div>
            <label htmlFor="document" className="block text-sm font-medium text-gray-700">Document Upload</label>
            <input
              id="document"
              type="file"
              {...register('document', { required: 'Document is required' })}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-300"
            />
            {errors.document && <p className="text-red-500 text-sm">{errors.document.message}</p>}
          </div>
          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? 'Registering...' : 'Register as Member'}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default MemberRegister;