import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const HealthRiskForm: React.FC = () => {
  const { control, handleSubmit } = useForm();
  const navigate = useNavigate()

  const onSubmit = (data: any) => {
    console.log("Dados do Formulário:", data);
  };

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          p: 4,
          mt: 5,
        }}
      >
        <Typography variant="h5" align="left" gutterBottom sx={{mb: 3}}>
          Formulário de Triagem de Risco de Saúde
        </Typography>
        <Typography variant="body1" align="left" gutterBottom sx={{mb: 3}}>
          Marque a opção que melhor descreve sua condição para cada item abaixo.
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            {/* Dificuldade para Respirar */}
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormLabel component="legend" sx={{mb: 2}}>
                  Dificuldade para Respirar
                </FormLabel>
                <Controller
                  name="breathingDifficulty"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <RadioGroup {...field}>
                      <FormControlLabel
                        value="inconsciente"
                        control={<Radio />}
                        label="Inconsciente ou não responde adequadamente"
                      />
                      <FormControlLabel
                        value="leve"
                        control={<Radio />}
                        label="Leve desconforto, consigo respirar normalmente"
                      />
                      <FormControlLabel
                        value="moderada"
                        control={<Radio />}
                        label="Moderada, sinto dificuldade, mas não me impede de falar"
                      />
                      <FormControlLabel
                        value="grave"
                        control={<Radio />}
                        label="Extremamente grave, sensação de sufocamento"
                      />
                      <FormControlLabel
                        value="severa"
                        control={<Radio />}
                        label="Severa, sinto grande dificuldade para respirar"
                      />
                    </RadioGroup>
                  )}
                />
              </FormControl>
            </Grid>

            {/* Febre */}
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormLabel component="legend" sx={{mb: 2}}>
                  Febre (Temperatura Corporal)
                </FormLabel>
                <Controller
                  name="fever"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <RadioGroup {...field}>
                      <FormControlLabel
                        value="sem_febre"
                        control={<Radio />}
                        label="Sem febre"
                      />
                      <FormControlLabel
                        value="baixa"
                        control={<Radio />}
                        label="Febre baixa (< 38ºC)"
                      />
                      <FormControlLabel
                        value="moderada"
                        control={<Radio />}
                        label="Febre moderada (38ºC - 39ºC)"
                      />
                      <FormControlLabel
                        value="alta"
                        control={<Radio />}
                        label="Febre alta (> 39ºC)"
                      />
                      <FormControlLabel
                        value="persistente"
                        control={<Radio />}
                        label="Febre muito alta e persistente"
                      />
                    </RadioGroup>
                  )}
                />
              </FormControl>
            </Grid>

            {/* Botões */}
            <Grid item xs={12} display="flex" justifyContent="space-between">
              <Button variant="outlined" color="primary" onClick={()=> navigate ("/patientHome")} sx={{width: 370}}>
                Início
              </Button>
              <Button type="submit" variant="contained" color="primary" sx={{width: 370}}>
                Próximas Perguntas
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default HealthRiskForm;
