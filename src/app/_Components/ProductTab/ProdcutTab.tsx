import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FaTruckFast } from 'react-icons/fa6';
import { FaBoxArchive } from 'react-icons/fa6';
import { FaStar } from 'react-icons/fa';

export function TabsDemo() {
  return (
    <Tabs defaultValue="Product-Details">
      <TabsList>
        <TabsTrigger
          value="Product-Details"
        >
          <FaBoxArchive />
          Product Details
        </TabsTrigger>
        <TabsTrigger value="Reviews">
          <FaStar />
          Reviews
        </TabsTrigger>
        <TabsTrigger value="Shipping-Returns">
          <FaTruckFast />
          Shipping & Returns
        </TabsTrigger>
      </TabsList>
      <TabsContent value="Product-Details">Make changes to your account here.</TabsContent>
      <TabsContent value="Reviews">Change your password here.</TabsContent>
      <TabsContent value="Shipping-Returns">Change your password here.</TabsContent>
    </Tabs>
  );
}
