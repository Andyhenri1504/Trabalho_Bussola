import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ComicsBooks {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  descricao: string;

  @Column()
  dataPublicacao: Date;

  @Column()
  capaUrl: string;
}