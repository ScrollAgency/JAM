import React, { useMemo, useEffect, useCallback, forwardRef, useImperativeHandle, ForwardRefRenderFunction } from 'react';
import { isSunday } from 'date-fns';
import Holidays from 'date-holidays';

// Types and Interfaces
interface HoursCalculatorProps {
  dateStart?: string;
  dateEnd?: string;
  onHoursChange?: (result: HoursResult) => void;
  onError?: (error: Error) => void;
}

export interface HoursResult {
  totalHours: number;
  regularDayHours: number;
  regularNightHours: number;
  sundayDayHours: number;
  sundayNightHours: number;
  holidayDayHours: number;
  holidayNightHours: number;
  sundayHolidayDayHours: number;
  sundayHolidayNightHours: number;
}

// Interface pour la référence exposée
export interface HoursCalculatorRef {
  calculate: (options?: { dateStart?: string; dateEnd?: string }) => Promise<HoursResult>;
  getCurrentResult: () => HoursResult;
}

// Fonction utilitaire pour un résultat vide
const emptyResult: HoursResult = {
  totalHours: 0,
  regularDayHours: 0,
  regularNightHours: 0,
  sundayDayHours: 0,
  sundayNightHours: 0,
  holidayDayHours: 0,
  holidayNightHours: 0,
  sundayHolidayDayHours: 0,
  sundayHolidayNightHours: 0
};

// Core calculation function
export const calculateHours = (dateStart?: string, dateEnd?: string): HoursResult => {
  // Calcul uniquement si les deux paramètres sont présents
  if (!dateStart || !dateEnd) {
    console.warn('HoursCalculator: dateStart et dateEnd sont requis pour le calcul');
    return { ...emptyResult };
  }

  try {
    const holidays = new Holidays('FR');
    const startDate = new Date(dateStart);
    const endDate = new Date(dateEnd);

    // Validation des dates
    if (
      isNaN(startDate.getTime()) ||
      isNaN(endDate.getTime()) ||
      endDate <= startDate
    ) {
      console.warn('HoursCalculator: Dates invalides ou date de fin antérieure à la date de début');
      return { ...emptyResult };
    }

    let totalHours = 0;
    let regularDayHours = 0;
    let regularNightHours = 0;
    let sundayDayHours = 0;
    let sundayNightHours = 0;
    let holidayDayHours = 0;
    let holidayNightHours = 0;
    let sundayHolidayDayHours = 0;
    let sundayHolidayNightHours = 0;

    // Parcours minute par minute
    let currentTime = new Date(startDate);
    while (currentTime < endDate) {
      const hours = currentTime.getHours();
      const isDaytime = hours >= 6 && hours < 21;
      const isSun = isSunday(currentTime);
      const isHol = holidays.isHoliday(currentTime) !== false;

      if (isSun && isHol) {
        if (isDaytime) {
          sundayHolidayDayHours += 1 / 60;
        } else {
          sundayHolidayNightHours += 1 / 60;
        }
      } else if (isSun) {
        if (isDaytime) {
          sundayDayHours += 1 / 60;
        } else {
          sundayNightHours += 1 / 60;
        }
      } else if (isHol) {
        if (isDaytime) {
          holidayDayHours += 1 / 60;
        } else {
          holidayNightHours += 1 / 60;
        }
      } else {
        if (isDaytime) {
          regularDayHours += 1 / 60;
        } else {
          regularNightHours += 1 / 60;
        }
      }

      totalHours += 1 / 60;
      currentTime = new Date(currentTime.getTime() + 60000);
    }

    // Arrondir à 2 décimales
    const result = {
      totalHours: Math.round(totalHours * 100) / 100,
      regularDayHours: Math.round(regularDayHours * 100) / 100,
      regularNightHours: Math.round(regularNightHours * 100) / 100,
      sundayDayHours: Math.round(sundayDayHours * 100) / 100,
      sundayNightHours: Math.round(sundayNightHours * 100) / 100,
      holidayDayHours: Math.round(holidayDayHours * 100) / 100,
      holidayNightHours: Math.round(holidayNightHours * 100) / 100,
      sundayHolidayDayHours: Math.round(sundayHolidayDayHours * 100) / 100,
      sundayHolidayNightHours: Math.round(sundayHolidayNightHours * 100) / 100
    };

    console.log('HoursCalculator: Calcul terminé avec succès', result);
    return result;
  } catch (error) {
    console.error('Erreur lors du calcul des heures :', error);
    return { ...emptyResult };
  }
};

// Composant principal avec forwardRef pour l'utilisation depuis Plasmic
const HoursCalculatorComponent: ForwardRefRenderFunction<HoursCalculatorRef, HoursCalculatorProps> = (
  { dateStart, dateEnd, onHoursChange, onError },
  ref
) => {
  // État pour stocker le dernier résultat
  const [currentResult, setCurrentResult] = React.useState<HoursResult>({ ...emptyResult });

  // Fonction de calcul exposée via ref
  const calculate = useCallback(async (options?: { dateStart?: string; dateEnd?: string }) => {
    try {
      const startDate = options?.dateStart || dateStart;
      const endDate = options?.dateEnd || dateEnd;
      
      console.log(`HoursCalculator: Calcul demandé avec dateStart=${startDate}, dateEnd=${endDate}`);
      
      const result = calculateHours(startDate, endDate);
      setCurrentResult(result);
      
      // Notifier via callback
      onHoursChange?.(result);
      
      return result;
    } catch (error) {
      const err = error instanceof Error ? error : new Error('Erreur lors du calcul des heures');
      onError?.(err);
      throw err;
    }
  }, [dateStart, dateEnd, onHoursChange, onError]);

  // Fonction pour obtenir le résultat actuel
  const getCurrentResult = useCallback(() => {
    return currentResult;
  }, [currentResult]);

  // Exposer les fonctions via ref pour les appels impératifs depuis Plasmic
  useImperativeHandle(ref, () => ({
    calculate,
    getCurrentResult
  }));

  // Le composant ne rend rien (invisible)
  return null;
};

// Composant avec forwardRef (suivant le même pattern que FileList)
const HoursCalculator = forwardRef(HoursCalculatorComponent);

// Hook pour utiliser le calculateur d'heures
export const useHoursCalculator = () => {
  const [isCalculating, setIsCalculating] = React.useState(false);

  const calculate = useCallback(async (dateStart?: string, dateEnd?: string): Promise<HoursResult> => {
    setIsCalculating(true);
    try {
      // Ajouter un petit délai pour simuler le calcul (optionnel)
      await new Promise(resolve => setTimeout(resolve, 10));
      
      const result = calculateHours(dateStart, dateEnd);
      return result;
    } finally {
      setIsCalculating(false);
    }
  }, []);

  return {
    calculate,
    isCalculating
  };
};

export default HoursCalculator; 