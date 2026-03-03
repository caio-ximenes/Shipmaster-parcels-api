import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

app.get('/', async (request, response) => {

    try {
        const encomendas = await prisma.encomenda.findMany();
        response.status(200).json(encomendas);
    } catch (error) {
        response.status(500).json({ error: 'Erro ao buscar encomendas' });
    }

});

app.post('/encomendas', async (request, response) => {
    try {
        const encomenda = await prisma.encomenda.create({
            data: request.body
        });
        response.status(201).json(encomenda);
    } catch (error) {
        response.status(500).json({ error: 'Erro ao criar encomenda' });
    }
});

app.get('/encomendas/:id', async (request, response) => {
    try {
        const encomenda = await prisma.encomenda.findUnique({
            where: { id: request.params.id }
        });
        if (encomenda) {
            response.status(200).json(encomenda);
        } else {
            response.status(404).json({ error: 'Encomenda não encontrada' });
        }
    } catch (error) {
        response.status(500).json({ error: 'Erro ao buscar encomenda' });
    }
});

app.put('/encomendas/:id', async (request, response) => {
    try {
        const encomenda = await prisma.encomenda.update({
            where: { id: request.params.id },
            data: request.body
        });
        response.status(200).json(encomenda);
    } catch (error) {
        response.status(500).json({ error: 'Erro ao atualizar encomenda' });
    }
});

app.delete('/encomendas/:id', async (request, response) => {
    try {
        await prisma.encomenda.delete({
            where: { id: request.params.id }
        });
        response.status(204).send();
    } catch (error) {
        response.status(500).json({ error: 'Erro ao deletar encomenda' });
    }
});



app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');

});