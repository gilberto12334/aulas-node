import {
    BaseEntity,
    CreateDateColumn,
    DeleteDateColumn,
  } from 'typeorm';
  
  export class BaseModel extends BaseEntity {
    
    @CreateDateColumn({
      type: 'timestamp',
    })
    createdAt?: Date;
  
    @DeleteDateColumn({
      type: 'timestamp',
    })
    deletedAt?: Date;
    
  }