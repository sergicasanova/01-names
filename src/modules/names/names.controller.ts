import { Controller, Post, Body, Get, Query, Param, Put, Delete } from '@nestjs/common';
import { NamesService } from './names.service';



@Controller('api/v1/names')
export class NamesController {

    constructor(private namesService: NamesService){

    }

    @Post()//decorador
    createName(@Body() data: { name: string}){
        return this.namesService.createName(data.name);
    }

    @Get()
    getNames(@Query('start') start: string){
        console.log(start)
        return this.namesService.getNames(start);
    }

    @Put('/:name/:newName')
    updateName(@Param('name') name: string, @Param('newName') newName: string){
        return this.namesService.updateName(name, newName);
    }

    @Delete('clear')
    deleteNames(){
        return this.namesService.clearNames();
    }

    @Delete('/:name')
    deleteName(@Param('name') name: string){
        return this.namesService.deleteName(name);
    }
    

}
