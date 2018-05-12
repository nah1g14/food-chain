import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.example.mynetwork{
   export abstract class Business extends Participant {
      businessId: string;
      firstName: string;
      lastName: string;
   }
   export class Farmer extends Business {
      city: string;
      country: string;
      description: string;
   }
   export class Distributor extends Business {
      city: string;
      country: string;
      description: string;
   }
   export class Retailer extends Business {
      city: string;
      country: string;
      description: string;
   }
   export class Customer extends Business {
      city: string;
      country: string;
      description: string;
   }
   export class Item extends Asset {
      itemId: string;
      description: string;
      owner: Business;
   }
   export abstract class Trade extends Transaction {
      item: Item;
   }
   export class FarmerToDistributor extends Trade {
      newOwner: Distributor;
   }
   export class DistributorToRetailer extends Trade {
      newOwner: Retailer;
   }
   export class Regulator extends Participant {
      regId: string;
      firstName: string;
      lastName: string;
   }
   export class tradeNotification extends Event {
      item: Item;
   }
// }
