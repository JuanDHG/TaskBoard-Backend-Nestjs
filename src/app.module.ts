import { Module } from '@nestjs/common';
import { TaskBoardModule } from './task-board/task-board.module';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  imports: [TaskBoardModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
